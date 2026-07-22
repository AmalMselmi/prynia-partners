/**
 * GrowthRings — the site's signature device.
 *
 * A set of concentric, hand-set arcs that read simultaneously as
 * tree-growth rings (literalizing "Growing Prosperity"), a
 * topographic contour map (the international, on-the-ground nature
 * of the work), and a compass/seal (diplomatic credibility). Drawn
 * as open strokes rather than filled shapes so it stays quiet and
 * line-art, never decorative or "startup gradient blob."
 *
 * Used sparingly: large and faint behind the Hero, small as a
 * corner mark on service cards, and tiny as the footer emblem.
 */
export default function GrowthRings({ className = '', variant = 'full', strokeWidth = 1 }) {
  const rings =
    variant === 'quarter'
      ? [18, 30, 42, 54]
      : [14, 26, 38, 50, 62, 74]

  return (
    <svg
      className={className}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {rings.map((r) => (
        <circle
          key={r}
          cx="10"
          cy="150"
          r={r}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          opacity={0.9 - r / 90}
        />
      ))}
      <circle cx="10" cy="150" r="3" fill="currentColor" />
    </svg>
  )
}
