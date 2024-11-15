// 10진수를 2진수로 변환하기
// O(logN)

function solution (number) {
  const numbers = []

  while (number > 0) {
    const r = number % 2
    number = parseInt(number / 2)
    numbers.push(r)
  }

  return numbers.reverse().join('')
}

console.log(solution(10)) // 1010
console.log(solution(27)) // 11011
console.log(solution(12345)) // 11000000111001
