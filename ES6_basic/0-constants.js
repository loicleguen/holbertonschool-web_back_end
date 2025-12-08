// Use const for variables that won't be reassigned
export function taskFirst() {
const task = 'I prefer const when I can.';
  return task;
}

// Simple function returning a string
export function getLast() {
  return ' is okay';
}

// Use let for variables that may be reassigned
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
