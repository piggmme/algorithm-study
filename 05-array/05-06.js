// https://school.programmers.co.kr/learn/courses/30/lessons/42889?language=javascript
// 실패율

function solution (N, stages) {
  const challenger = new Array(N + 2).fill(0)
  for (const stage of stages) {
    challenger[stage] += 1
  }

  const fails = {}
  let total = stages.length
  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0
      continue
    }

    fails[i] = challenger[i] / total
    total -= challenger[i]
  }

  return Object.entries(fails).sort((a, b) => b[1] - a[1]).map(v => Number(v[0]))
}

function mysolution (N, stages) {
  const failures = Array(N + 1).fill(0)
  for (let stage = 1; stage <= N; stage++) {
    stages.reduce((acc, curStage) => {
      if (curStage === stage) {
        failures[stage]++
      }
    }, 0)
  }

  let total = stages.length
  const failureRates = failures.map((failure, index) => {
    const failureRate = failure / total
    total -= failure
    return [index, failureRate]
  })

  return failureRates.slice(1).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    }
    return b[1] - a[1]
  }).map(([index]) => index)
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])) // [3, 4, 2, 1, 5]
console.log(solution(4, [4, 4, 4, 4, 4])) // [4, 1, 2, 3]
