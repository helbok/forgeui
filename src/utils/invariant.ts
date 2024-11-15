/** Throws when the condition is false; compiles to a no-op in production. */
export function invariant(
  condition: unknown,
  message = "Invariant violation",
): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
