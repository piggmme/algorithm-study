// https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=javascript
// 괄호 회전하기

function rotate (s) {
  return s.slice(1) + s[0]
}

function isPair (s1, s2) {
  if (s1 === '(' && s2 === ')') return true
  if (s1 === ')' && s2 === '(') return true
  if (s1 === '[' && s2 === ']') return true
  if (s1 === ']' && s2 === '[') return true
  if (s1 === '{' && s2 === '}') return true
  if (s1 === '}' && s2 === '{') return true
  return false
}

function isCorrect (s) {
  const stack = []
  for (const c of s) {
    if (c === '(' || c === '[' || c === '{') stack.push(c)
    else {
      if (stack.length === 0) return false
      if (isPair(stack[stack.length - 1], c)) {
        stack.pop()
      } else return false
    }
  }

  return stack.length === 0
}

function solution (s) {
  let answer = 0
  for (let i = 0; i < s.length; i++) {
    if (isCorrect(s)) answer++
    s = rotate(s)
  }
  return answer
}
