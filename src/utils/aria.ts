/** Map an error id to the ARIA attributes a control should carry. */
export function ariaErrorMessage(id: string): Record<string, string> {
  return { "aria-describedby": id, "aria-invalid": "true" as const };
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** True when the event target lives inside the given element. */
export function isEventFromChild(event: Event, ref: HTMLElement | null): boolean {
  return ref != null && ref.contains(event.target as Node);
}
