export function toBoolean(value: string | null): boolean {
  if (typeof value !== "string") {
    return false;
  }
  return value.toLowerCase() === "true";
}
