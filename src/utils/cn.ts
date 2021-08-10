export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | Record<string, boolean | undefined>
  | ClassValue[];

function toValue(mix: ClassValue): string {
  if (typeof mix === "string" || typeof mix === "number") {
    return String(mix);
  }
  if (mix == null || mix === false) {
    return "";
  }
  if (Array.isArray(mix)) {
    return mix.map(toValue).filter(Boolean).join(" ");
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
  const parts = inputs.map(toValue).filter(Boolean);
  return parts.join(" ");
}
