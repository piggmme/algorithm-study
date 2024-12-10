// 18. 두 개의 수로 특정 값 만들기

// n개의 양의 정수로 이루어진 리스트 arr와
// 정수 taarget이 주어졌을 때
// 이 중에서 합이 target인 두 수가 arr에 있는지 찾고
// 그 결과를 참, 거짓으로 반환하시오.

// 시간 복잡도 => O(n)
function solution (arr, target) {
  const hash = new Map()
  for (const num of arr) {
    if (hash.has(target - num)) return true
    hash.set(num, true)
  }
  return false
}

console.log(solution([1, 2, 3, 4, 8], 6)) // true
console.log(solution([2, 3, 5, 9], 10)) // false
