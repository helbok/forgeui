export function ariaErrorMessage(id: string): Record<string, string> {
  return { "aria-describedby": id, "aria-invalid": "true" };
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function isEventFromChild(event: Event, ref: HTMLElement | null): boolean {
  return ref != null && ref.contains(event.target as Node);
}
