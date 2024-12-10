// 20. 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

// 10만 => O(nlogn)

function solution (participant, completion) {
  const hash = new Map()

  participant.forEach((name) => {
    if (hash.has(name)) {
      hash.set(name, hash.get(name) + 1)
    } else {
      hash.set(name, 1)
    }
  })

  completion.forEach((name) => {
    hash.set(name, hash.get(name) - 1)
  })

  for (const [key, value] of hash) {
    if (value !== 0) return key
  }
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])) // 'leo'
