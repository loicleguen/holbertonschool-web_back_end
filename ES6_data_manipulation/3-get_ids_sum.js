export default function getStudenIdsSum(students) {
  return students.reduce((sum, students) => sum + students.id, 0)
}
