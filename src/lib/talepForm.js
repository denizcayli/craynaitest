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

    form.classList.add('hidden')
    document.getElementById('talepProgress')?.classList.add('hidden')
    const success = document.getElementById('talepSuccess')
    if (success) success.classList.remove('hidden')
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
  window.addEventListener('resize', levelSteps, { signal })

  showStep(1)

  return () => abort.abort()
}
