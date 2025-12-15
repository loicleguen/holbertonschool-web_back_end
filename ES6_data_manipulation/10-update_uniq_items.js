export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const [item, value] of map) {
    if (value === 1) {
      map.set(item, 100);
    }
  }
}
