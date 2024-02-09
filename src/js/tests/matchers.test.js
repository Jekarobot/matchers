import compareAndSort from '../matchers.js'

test('sort objects in descending order of health', () => {
  const objects = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 }
  ]
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 }
  ]
  expect(compareAndSort(...objects)).toEqual(expected)
})
