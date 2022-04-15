export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | Record<string, boolean | undefined>
  | ClassValue[];

function toValue(mix: ClassValue, depth: number): string {
  if (typeof mix === "string" || typeof mix === "number") {
    return String(mix);
  }
  if (mix == null || mix === false) {
    return "";
  }
  if (Array.isArray(mix)) {
    return mix.map((item) => toValue(item, depth + 1)).filter(Boolean).join(" ");
  }
  if (typeof mix === "object") {
    return Object.entries(mix)
      .filter(([, value]) => Boolean(value))
      .map(([key]) => key)
      .join(" ");
  }
  return "";
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.map((input) => toValue(input, 0)).filter(Boolean).join(" ");
}
