// 16. 기능 개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586?language=javascript

function solution (progresses, speeds) {
  const result = []

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i]
    }

    let count = 0
    while (progresses[0] >= 100) {
      progresses.shift()
      speeds.shift()
      count++
    }
    if (count > 0) result.push(count)
  }
  return result
}

console.log(solution([93, 30, 55], [1, 30, 5])) // [2, 1]
