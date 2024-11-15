// 괄호 짝 맞추기

// 소괄호는 짝을 맞춘 열린 괄호 '('와 닫힌 괄호 ')'가 있어야 한다.
// 문제에서는 열린 괄호와 닫힌 괄호가 마구 뒤섞인 문자열을 준다.
// 이때 소괄호가 정상적으로 열고 닫혔는지 판별하는 함수를 구현해라.

// O(N)
function solution (string) {
  const stack = []

  for (const s of string) {
    if (s === '(') stack.push(s)
    else {
      if (stack.length === 0) return false
      stack.pop()
    }
  }

  return stack.length === 0
}

console.log(solution('(())()')) // true
console.log(solution('((())()')) // false
console.log(solution(')()(')) // false
console.log(solution('(()')) // false
