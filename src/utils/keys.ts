export const Keys = {
  Enter: "Enter",
  Escape: "Escape",
  Tab: "Tab",
  Space: " ",
  Backspace: "Backspace",
  ArrowDown: "ArrowDown",
  ArrowUp: "ArrowUp",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
  Home: "Home",
  End: "End",
  PageUp: "PageUp",
  PageDown: "PageDown",
} as const;

export type Key = (typeof Keys)[keyof typeof Keys];

export function isModified(event: KeyboardEvent): boolean {
  return event.altKey || event.ctrlKey || event.metaKey;
}

export function isKey(event: KeyboardEvent, key: Key): boolean {
  return event.key === key;
}
