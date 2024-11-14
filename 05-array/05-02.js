// 배열 제어하기
// 정수 배열을 받아서 중복값을 제거하고 내림차순으로 정렬
// 배열의 길이는 2이상 1,000 이하 => O(N^2) 가능
// 배열의 데이터 값은 -100,000 이상 100,000 이하

// BigO => O(NlogN)
function solution (arr) {
  const uniqueArr = [...new Set(arr)] // O(N)
  return uniqueArr.sort((a, b) => b - a) // O(NlogN)
}
console.log(solution([1, 5, 2, 2, 2, 3, 3, 6, 3, 7, 4, 11])) // [11, 7, 6, 5, 4, 3, 2, 1]
