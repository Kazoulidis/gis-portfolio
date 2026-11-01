/**
 * Shared by the Day 3 (2026) components: the compactness classes, drawing a
 * normalised municipality as an SVG path, and the shape matcher.
 *
 * Shapes come from public/data/30dmc-2026-day-03-shapes.json. Each one is
 * centred on its centroid and scaled to area 1, y up, so every municipality
 * is the same size and only the shape differs.
 */

export interface Shape {
  code: string;
  name: string;
  unit: string;
  rank: number;
  /** Polsby-Popper score, from the full-detail boundary. */
  pp: number;
  area: number;
  /** Separate pieces in the full-detail boundary (islands, exclaves). */
  parts: number;
  island: boolean;
  /** Outer rings and holes, [x, y] pairs. */
  rings: number[][][];
  /** Indexes into `rings` that are holes. */
  holes: number[];
  /** The largest part's outline, 96 points, counter-clockwise. */
  outline: number[][];
}

/** Five classes, roundest first. Same colours as the printed sheet. */
export const CLASSES = [
  { min: 0.4, colour: '#1c5d5d', label: '0.40 and over' },
  { min: 0.3, colour: '#4f8f84', label: '0.30 to 0.40' },
  { min: 0.2, colour: '#9dbba2', label: '0.20 to 0.30' },
  { min: 0.1, colour: '#e3b277', label: '0.10 to 0.20' },
  { min: -1, colour: '#c2622a', label: 'under 0.10' },
];

export const colourFor = (pp: number) => CLASSES.find((c) => pp >= c.min)!.colour;

/** SVG path data, y flipped so north is up on screen. */
export function shapePath(s: Pick<Shape, 'rings'>): string {
  return s.rings
    .map((r) => 'M' + r.map(([x, y]) => `${x},${-y}`).join('L') + 'Z')
    .join('');
}

// --- Matching ----------------------------------------------------------------

/** Area and centroid of a closed ring (shoelace). */
function ringStats(ring: number[][]) {
  let a = 0;
  let cx = 0;
  let cy = 0;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const cross = ring[j][0] * ring[i][1] - ring[i][0] * ring[j][1];
    a += cross;
    cx += (ring[j][0] + ring[i][0]) * cross;
    cy += (ring[j][1] + ring[i][1]) * cross;
  }
  a /= 2;
  return { area: a, cx: cx / (6 * a), cy: cy / (6 * a) };
}

/**
 * A drawn stroke (screen pixels, y down) turned into the same frame as the
 * municipalities: closed, y up, centred on its centroid, area 1,
 * counter-clockwise. Returns null for a scribble with no area to speak of.
 * `toScreen` maps a point of that frame back onto the drawing, so a
 * municipality can be shown at the size and place the shape was drawn.
 */
export function normaliseDrawn(points: number[][]) {
  if (points.length < 8) return null;
  let ring = points.map(([x, y]) => [x, -y]);
  const st = ringStats(ring);
  // Area and centroid come from the filled pixels, not the shoelace formula:
  // an outline that crosses itself (a figure of eight) has loops that cancel
  // out in the formula, which would scale and centre the drawing wildly.
  const filled = filledStats(ring);
  if (!filled || filled.area < 400) return null;
  const k = 1 / Math.sqrt(filled.area);
  ring = ring.map(([x, y]) => [(x - filled.cx) * k, (y - filled.cy) * k]);
  if (st.area < 0) ring.reverse();
  const toScreen = ([x, y]: number[]) => [x / k + filled.cx, -(y / k + filled.cy)];
  return { ring, toScreen };
}

/** Area and centroid of a ring as filled on screen (even-odd), measured on a 200 x 200 raster of its box. */
function filledStats(ring: number[][]) {
  const N = 200;
  let [x0, y0, x1, y1] = [Infinity, Infinity, -Infinity, -Infinity];
  for (const [x, y] of ring) {
    x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y);
  }
  const span = Math.max(x1 - x0, y1 - y0);
  if (!(span > 0)) return null;
  const s = N / span;
  const ctx = new OffscreenCanvas(N, N).getContext('2d', { willReadFrequently: true })!;
  ctx.beginPath();
  ring.forEach(([x, y], i) => (i ? ctx.lineTo((x - x0) * s, (y1 - y) * s) : ctx.moveTo((x - x0) * s, (y1 - y) * s)));
  ctx.closePath();
  ctx.fill('evenodd');
  const data = ctx.getImageData(0, 0, N, N).data;
  let n = 0;
  let sx = 0;
  let sy = 0;
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      if (data[(j * N + i) * 4 + 3] > 127) {
        n++;
        sx += i + 0.5;
        sy += j + 0.5;
      }
    }
  }
  if (!n) return null;
  return { area: n / (s * s), cx: x0 + sx / n / s, cy: y1 - sy / n / s };
}

const GRID = 64;
const EXTENT = 1.8; // the raster covers -1.8 .. 1.8 in shape units

/** Rasterise rings into a GRID x GRID mask with the even-odd rule. */
export function rasterise(rings: number[][][]): Uint8Array {
  const canvas = new OffscreenCanvas(GRID, GRID);
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  const k = GRID / (2 * EXTENT);
  ctx.beginPath();
  for (const r of rings) {
    r.forEach(([x, y], i) => {
      const px = (x + EXTENT) * k;
      const py = (EXTENT - y) * k;
      if (i) ctx.lineTo(px, py);
      else ctx.moveTo(px, py);
    });
    ctx.closePath();
  }
  ctx.fill('evenodd');
  const data = ctx.getImageData(0, 0, GRID, GRID).data;
  const mask = new Uint8Array(GRID * GRID);
  for (let i = 0; i < mask.length; i++) mask[i] = data[i * 4 + 3] > 127 ? 1 : 0;
  return mask;
}

/** Overlap as intersection over union, 0..1. */
export function overlap(a: Uint8Array, b: Uint8Array): number {
  let inter = 0;
  let union = 0;
  for (let i = 0; i < a.length; i++) {
    inter += a[i] & b[i];
    union += a[i] | b[i];
  }
  return union ? inter / union : 0;
}

/** Turn a ring about the origin (its centroid), degrees anticlockwise, y up. */
export function rotate(ring: number[][], deg: number): number[][] {
  const a = (deg * Math.PI) / 180;
  const c = Math.cos(a);
  const s = Math.sin(a);
  return ring.map(([x, y]) => [x * c - y * s, x * s + y * c]);
}

/** Resample a closed ring to n points evenly spaced along its length. */
export function resample(ring: number[][], n = 96): number[][] {
  const pts = [...ring, ring[0]];
  const seg: number[] = [];
  let total = 0;
  for (let i = 1; i < pts.length; i++) {
    const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    seg.push(d);
    total += d;
  }
  const out: number[][] = [];
  let i = 0;
  let acc = 0;
  for (let k = 0; k < n; k++) {
    const t = (k / n) * total;
    while (i < seg.length - 1 && acc + seg[i] < t) acc += seg[i++];
    const f = seg[i] ? (t - acc) / seg[i] : 0;
    out.push([pts[i][0] + f * (pts[i + 1][0] - pts[i][0]), pts[i][1] + f * (pts[i + 1][1] - pts[i][1])]);
  }
  return out;
}

/**
 * Line the drawn outline up with the target's, point for point: the starting
 * point and the direction round with the smallest total distance. A drawing
 * can go either way round, and one going against the target's direction would
 * turn inside out on the way; without the shift the morph would cross over
 * itself.
 */
export function align(from: number[][], to: number[][]): number[][] {
  const n = from.length;
  let best: number[][] = from;
  let bestD = Infinity;
  for (const ring of [from, [...from].reverse()]) {
    for (let s = 0; s < n; s++) {
      let d = 0;
      for (let i = 0; i < n && d < bestD; i++) {
        const p = ring[(i + s) % n];
        d += (p[0] - to[i][0]) ** 2 + (p[1] - to[i][1]) ** 2;
      }
      if (d < bestD) {
        bestD = d;
        best = ring.map((_, i) => ring[(i + s) % n]);
      }
    }
  }
  return best;
}
