/**
 * Run `start` once `el` comes near the viewport, not on page load.
 *
 * The interactive maps sit below the finished map image, out of view when a
 * page opens, yet each one downloads megabytes of data and basemap tiles as
 * soon as it starts. Starting them on approach means a visitor who only reads
 * the page never pays for the map, while the margin starts it just before it
 * scrolls into view.
 *
 * The margin must stay smaller than the gap between the bottom of the window
 * and the map when a page opens: about 400 px on an 800 px laptop window,
 * because the maps sit ~1,200 px down, below the finished map image. 600 px
 * was measured to start every map on open, defeating the point.
 */
export function whenNear(el: Element, start: () => void, margin = '200px 0px') {
  if (!('IntersectionObserver' in window)) {
    start();
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        observer.disconnect();
        start();
      }
    },
    { rootMargin: margin },
  );
  observer.observe(el);
}
