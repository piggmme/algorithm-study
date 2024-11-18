// https://school.programmers.co.kr/learn/courses/30/lessons/42584?language=javascript
// 지문 설명: https://school.programmers.co.kr/questions/20326?question=20326
// 주식가격
// 10만 => O(N)

function solution (prices) {
  const n = prices.length
  const answer = Array(prices.length).fill(0)
  const stack = [0]

  for (let i = 1; i < n; i++) {
    // 가격이 떨어졌으므로 이전 가격의 기간을 계산
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const index = stack.pop()
      answer[index] = i - index
    }
    stack.push(i)
  }

  // 스택에 남아있는 가격들은 가격이 떨어지지 않은 경우임
  while (stack.length > 0) {
    const index = stack.pop()
    answer[index] = n - index - 1
  }

  return answer
}

function mysolution (prices) {
  const result = Array(prices.length).fill(0)
  const stack = []

  prices.forEach((price, index) => {
    if (stack.length === 0) {
      stack.push(index)
    } else if (price >= prices[stack[stack.length - 1]]) {
      stack.push(index)
    } else {
      while (stack.length > 0 && price < prices[stack[stack.length - 1]]) {
        const top = stack.pop()
        result[top] = index - top
      }
      stack.push(index)
    }
  })

  stack.forEach((index) => {
    const lastIndex = stack[stack.length - 1]
    result[index] = lastIndex - index
  })

  return result
}

console.log(solution([1, 2, 3, 2, 3])) // [4, 3, 1, 1, 0]
