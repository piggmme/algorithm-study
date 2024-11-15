// https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 시험은 10,000 문제 => O(NlogN)

// O(N)
function solution (answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ]

  const scores = [0, 0, 0]

  // O(N)
  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j]++
      }
    }
  }

  // O(3)
  const maxScore = Math.max(...scores)
  const highestScorers = []
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScorers.push(i + 1)
    }
  }

  return highestScorers
}

function mySolution (answers) {
  let oneScore = 0
  let twoScore = 0
  let threeScore = 0
  const one = [1, 2, 3, 4, 5]
  const two = [2, 1, 2, 3, 2, 4, 2, 5]
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  // O(N)
  for (const answer of answers) {
    const oneAnswer = one.shift()
    const twoAnswer = two.shift()
    const threeAnswer = three.shift()

    if (oneAnswer === answer) oneScore++
    if (twoAnswer === answer) twoScore++
    if (threeAnswer === answer) threeScore++

    one.push(oneAnswer)
    two.push(twoAnswer)
    three.push(threeAnswer)
  }

  // O(3)
  const maxScore = Math.max(oneScore, twoScore, threeScore)
  const result = [1, 2, 3]
    .filter((_, i) => [oneScore, twoScore, threeScore][i] === maxScore)
    .sort((a, b) => a - b)
  return result
}

console.log(solution([1, 2, 3, 4, 5])) // [1]
console.log(solution([1, 3, 2, 4, 2])) // [1, 2, 3]
