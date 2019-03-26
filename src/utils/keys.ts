export const Keys = {
  Enter: "Enter",
  Escape: "Escape",
  Tab: "Tab",
  Space: " ",
  ArrowDown: "ArrowDown",
  ArrowUp: "ArrowUp",
  ArrowLeft: "ArrowLeft",
  ArrowRight: "ArrowRight",
  Home: "Home",
  End: "End",
} as const;

export type Key = (typeof Keys)[keyof typeof Keys];

export function isKey(event: KeyboardEvent, key: Key): boolean {
  return event.key === key;
}
