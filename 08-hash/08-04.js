// 21. 할인 행사
// https://school.programmers.co.kr/learn/courses/30/lessons/131127?language=javascript

function isShallowEqual (map1, map2) {
  if (map1.size !== map2.size) return false

  for (const key of map1.keys()) {
    if (map1.get(key) !== map2.get(key)) return false
  }

  return true
}

function solution (want, number, discount) {
  const wantHash = new Map()
  want.forEach((name, idx) => {
    wantHash.set(name, number[idx])
  })

  const discountHash = new Map()
  for (let i = 0; i < 10; i++) {
    discountHash.set(discount[i], discountHash.get(discount[i]) + 1 || 1)
  }

  let count = 0
  for (let i = 10; i < discount.length; i++) {
    if (isShallowEqual(wantHash, discountHash)) count += 1
    discountHash.set(discount[i], discountHash.get(discount[i]) + 1 || 1)
    discountHash.set(discount[i - 10], discountHash.get(discount[i - 10]) - 1)
    if (discountHash.get(discount[i - 10]) === 0) discountHash.delete(discount[i - 10])
  }
  if (isShallowEqual(wantHash, discountHash)) count += 1
  return count
}

// 3
console.log(
  solution(
    ['banana', 'apple', 'rice', 'pork', 'pot'],
    [3, 2, 2, 2, 1],
    ['chicken', 'apple', 'apple', 'banana', 'rice', 'apple', 'pork', 'banana', 'pork', 'rice', 'pot', 'banana', 'apple', 'banana'],
  ),
)

// 0
console.log(
  solution(
    ['apple'],
    [10],
    ['banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana', 'banana'],
  ),
)
