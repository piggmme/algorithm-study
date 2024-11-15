// https://school.programmers.co.kr/learn/courses/30/lessons/12949?language=javascript
// 행렬의 곱셈
// 2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

// A = m x n
// B = n x r
// result = m x r
function solution (A, B) {
  const m = A.length
  const n = A[0].length
  const r = B[0].length
  const result = Array(m).fill().map(() => Array(r).fill(0))

  // O(m * r * n) => O(N^3)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < r; j++) {
      for (let k = 0; k < n; k++) {
        result[i][j] += A[i][k] * B[k][j]
      }
    }
  }

  return result
}
