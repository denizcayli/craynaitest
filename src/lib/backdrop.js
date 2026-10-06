// Whether the page behind a point is dark, judged by the nearest painted background colour
// there. `ignore` lists the elements doing the asking, which sit on top and must not count.
export function isDarkBehind(x, y, ...ignore) {
  for (const element of document.elementsFromPoint(x, y)) {
    // The intro screen is temporary cover, not the page.
    if (ignore.some((own) => own?.contains(element)) || element.closest('.preloader')) continue
    const channels = getComputedStyle(element).backgroundColor.match(/[\d.]+/g)?.map(Number)
    if (!channels || (channels[3] ?? 1) < 0.5) continue
    const [r, g, b] = channels
    return 0.299 * r + 0.587 * g + 0.114 * b < 140
  }
  return true
}
