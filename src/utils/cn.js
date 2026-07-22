/**
 * Joins class names together, filtering out falsy values.
 * Small local replacement for the `clsx` package so the dependency
 * list stays exactly as specified in the brief.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
