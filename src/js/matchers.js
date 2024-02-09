export default function compareAndSort (...objects) {
  const sortedObjects = objects.sort((a, b) => b.health - a.health)
  return sortedObjects
}
