export function parseTimeToDate(time?: string): Date | null {
  if (!time) return null
  return new Date(`1970-01-01T${time}:00Z`)
}