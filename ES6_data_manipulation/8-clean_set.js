export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  return Array.from(set)
    .filter((word) => word.startsWith(startString))
    .map((word) => word.slice(startString.length))
    .join('-');
}
