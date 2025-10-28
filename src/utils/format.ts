const UNITS = ["B", "KB", "MB", "GB", "TB"] as const;

/** Format a byte count into a human-readable size string. */
export function formatBytes(bytes: number, decimals = 1): string {
  if (bytes === 0) return "0 B";
  const i = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    UNITS.length - 1,
  );
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(decimals)} ${UNITS[i]}`;
}

/** Format a number with thousands separators. */
export function formatNumber(value: number): string {
  return new Intl.NumberFormat("en-US").format(value);
}
