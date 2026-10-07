// Port of the original crayn-talep.js (4 step request wizard). Returns a cleanup function.
// The clone has no backend, so a valid submit only shows the success state.
export function initTalepForm() {
  const form = document.getElementById('talepForm')
  if (!form) return () => {}

  const abort = new AbortController()
  const { signal } = abort
  const totalSteps = parseInt(form.dataset.steps, 10) || 1
  let current = 1

  const prevBtn = document.getElementById('talepPrev')
  const nextBtn = document.getElementById('talepNext')
  const submitBtn = document.getElementById('talepSubmit')
  const counter = document.getElementById('stepCounter')
  const formError = document.getElementById('talepFormError')

  const stepEl = (n) => form.querySelector(`.talep-step[data-step="${n}"]`)
  const card = form.closest('.tlp-glass')
  const phone = window.matchMedia('(pointer: coarse)').matches
  const root = document.documentElement
  let centring
  let leaving

  // Scrolls so that `element` sits in the middle of what the keyboard leaves of the screen.
  // Left alone when it is near enough already, so the page does not shift at every tap.
  const centre = (element, always) => {
    const view = window.visualViewport
    const height = view?.height ?? window.innerHeight
    const box = element.getBoundingClientRect()
    const off = box.top + box.height / 2 - ((view?.offsetTop ?? 0) + height / 2)
    if (always || Math.abs(off) > height * 0.2) window.scrollBy({ top: off, behavior: 'smooth' })
  }

  const tag = document.getElementById('stepTag')

  function updateProgress() {
    for (let i = 1; i <= totalSteps; i++) {
      const segment = document.querySelector(`.tlp-seg[data-seg="${i}"]`)
      if (!segment) continue
      segment.classList.toggle('is-now', i === current)
      segment.classList.toggle('is-done', i < current)
    }
    if (counter) counter.textContent = `${current} / ${totalSteps}`
    if (tag) tag.textContent = stepEl(current)?.dataset.tag ?? ''
  }

  function showStep(n) {
    // Which way the form is moving, for the step's entrance (styles/talep.css).
    form.dataset.dir = n < current ? 'prev' : 'next'
    current = Math.min(Math.max(n, 1), totalSteps)
    for (let i = 1; i <= totalSteps; i++) {
      const el = stepEl(i)
      if (el) el.classList.toggle('hidden', i !== current)
    }
    prevBtn.classList.toggle('hidden', current === 1)
    nextBtn.classList.toggle('hidden', current === totalSteps)
    submitBtn.classList.toggle('hidden', current !== totalSteps)
    updateProgress()
    if (formError) formError.classList.add('hidden')
  }

  function clearError(fieldDiv) {
    const err = fieldDiv.querySelector('.field-error')
    if (err) { err.classList.add('hidden'); err.textContent = '' }
  }

  function setError(fieldDiv, msg) {
    const err = fieldDiv.querySelector('.field-error')
    if (err) { err.textContent = msg; err.classList.remove('hidden') }
  }

  function fieldHasValue(fieldDiv) {
    const choices = fieldDiv.querySelectorAll('input[type="radio"], input[type="checkbox"]')
    if (choices.length) return [...choices].some((choice) => choice.checked)
    const input = fieldDiv.querySelector('input, textarea, select')
    return input && input.value.trim() !== ''
  }

  function validateStep(n) {
    const el = stepEl(n)
    if (!el) return true
    let ok = true
    el.querySelectorAll('.talep-field').forEach((fieldDiv) => {
      if (!fieldDiv.querySelector('[data-required="1"]') || fieldHasValue(fieldDiv)) {
        clearError(fieldDiv)
      } else {
        setError(fieldDiv, 'Bu alan zorunludur.')
        ok = false
      }
    })
    return ok
  }

  nextBtn.addEventListener('click', () => { if (validateStep(current)) showStep(current + 1) }, { signal })
  prevBtn.addEventListener('click', () => showStep(current - 1), { signal })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!validateStep(current)) return

    // The card keeps the height the form gave it and shows the confirmation in its middle;
    // otherwise the page would shrink and leave the visitor looking at the footer.
    if (card) {
      card.style.minHeight = `${card.offsetHeight}px`
      card.classList.add('is-done')
    }
    document.activeElement?.blur()
    form.classList.add('hidden')
    document.getElementById('talepProgress')?.classList.add('hidden')
    const success = document.getElementById('talepSuccess')
    if (success) success.classList.remove('hidden')
    // Once the keyboard has gone, the card is brought to the middle of the screen.
    clearTimeout(centring)
    if (card) centring = setTimeout(() => centre(card, true), phone ? 400 : 0)
  }, { signal })

  const clearOnFill = (e) => {
    const fieldDiv = e.target.closest('.talep-field')
    if (fieldDiv && fieldHasValue(fieldDiv)) clearError(fieldDiv)
  }
  form.addEventListener('input', clearOnFill, { signal })
  form.addEventListener('change', clearOnFill, { signal })

  // Every step is given the height of the tallest one, so the card keeps its size and the page
  // stays where it is while moving through the form.
  const steps = [...form.querySelectorAll('.talep-step')]
  const levelSteps = () => {
    steps.forEach((el) => { el.style.minHeight = '' })
    const tallest = Math.max(...steps.map((el) => {
      const hidden = el.classList.contains('hidden')
      el.classList.remove('hidden')
      const height = el.offsetHeight
      el.classList.toggle('hidden', hidden)
      return height
    }))
    steps.forEach((el) => { el.style.minHeight = `${tallest}px` })
  }
  levelSteps()
  // Only a change of width can change the steps' heights. A phone also reports a resize when its
  // keyboard or address bar comes and goes, and measuring then would replay the step's entrance
  // and make the form jump under the finger.
  let levelledAt = window.innerWidth
  window.addEventListener('resize', () => {
    if (window.innerWidth === levelledAt) return
    levelledAt = window.innerWidth
    levelSteps()
  }, { signal })

  // On a phone the keyboard covers half the screen. While a field is being typed in, the form
  // has the page to itself (styles/talep.css puts the footer away and leaves room under the
  // card), and the field is brought to the middle of what the keyboard leaves, once it is up.
  if (phone) {
    const typed = 'input:not([type="radio"]):not([type="checkbox"]), textarea'
    form.addEventListener('focusin', (e) => {
      if (!e.target.matches(typed)) return
      clearTimeout(leaving)
      root.classList.add('talep-typing')
      clearTimeout(centring)
      centring = setTimeout(() => centre(e.target), 350)
    }, { signal })
    // Moving straight on to the next field must not bring the footer back in between.
    form.addEventListener('focusout', () => {
      clearTimeout(leaving)
      leaving = setTimeout(() => {
        root.classList.remove('talep-typing')
        if (!card || form.classList.contains('hidden')) return
        // With the keyboard gone, the whole card is shown again: in the middle of the screen,
        // or, where it is taller than the screen, with its consent box and buttons in view.
        const box = card.getBoundingClientRect()
        if (box.height <= window.innerHeight - 32) centre(card)
        else window.scrollBy({ top: box.bottom - (window.innerHeight - 16), behavior: 'smooth' })
      }, 300)
    }, { signal })
  }
  signal.addEventListener('abort', () => {
    clearTimeout(centring)
    clearTimeout(leaving)
    root.classList.remove('talep-typing')
  })

  showStep(1)

  return () => abort.abort()
}
