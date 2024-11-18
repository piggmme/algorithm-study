// https://school.programmers.co.kr/learn/courses/30/lessons/12973?language=javascript
// 짝지어 제거하기
// 입력 100만 => O(nlogn)

function solution (s) {
  const stack = []
  for (const c of s) {
    if (stack.length === 0) stack.push(c)
    else {
      if (stack[stack.length - 1] === c) stack.pop()
      else stack.push(c)
    }
  }
  return stack.length === 0 ? 1 : 0
}

console.log(solution('baabaa')) // 1
