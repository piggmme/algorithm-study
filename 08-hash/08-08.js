// 25. 메뉴 리뉴얼
// https://school.programmers.co.kr/learn/courses/30/lessons/72411?language=javascript

function solution (orders, course) {
  const combinationHash = new Map()
  const maxCountHash = new Map()

  course.forEach((course) => {
    orders.forEach((order) => {
      const orderArr = order.split('').sort()
      const orderCominations = getCombinations(orderArr, course)

      orderCominations.forEach((combination) => {
        const key = combination.join('')
        combinationHash.set(key, combinationHash.get(key) + 1 || 1)
      })
    })
  })

  Array.from(combinationHash).forEach(([key, count]) => {
    maxCountHash.set(key.length, Math.max(maxCountHash.get(key.length) || 0, count))
  })

  return Array.from(combinationHash)
    .filter(([key, count]) => count >= 2 && count >= maxCountHash.get(key.length))
    .map(([key, _]) => key)
    .sort()
}

function getCombinations (arr, selectNumber) {
  if (selectNumber === 1) return arr.map(v => [v])

  const combinations = []

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1)
    const combi = getCombinations(rest, selectNumber - 1)
    const combined = combi.map(v => [fixed, ...v])
    combinations.push(...combined)
  })

  return combinations
}

// ["AC", "ACDE", "BCFG", "CDE"]
// console.log(solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4]))
// ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(['ABCDE', 'AB', 'CD', 'ADE', 'XYZ', 'XYZ', 'ACD'], [2, 3, 5]))
