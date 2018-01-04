export default function findById(id, arr) {
  return arr.find(m => id === m.id) !== undefined;
}
