// 19. 문자열 해싱을 이용한 검색 함수 만들기

// 문자열 리스트 stringList와
// 쿼리 리스트 queryList를 받아
// 각 쿼리 리스트에 있는 문자열이 stringList 문자열 리스트에 있는지 여부 확인

function polynomialHash (str) {
  const p = 31 // 소수
  const m = 1_000_000_007 // 버킷 크기
  let hashValue = 0

  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m
  }
  return hashValue
}

function solution (stringList, queryList) {
  const hashList = stringList.map(str => polynomialHash(str))
  const result = []
  for (const query of queryList) {
    const queryHash = polynomialHash(query)
    if (hashList.includes(queryHash)) {
      result.push(true)
    } else {
      result.push(false)
    }
  }
  return result
}

// [true, false, false, true]
console.log(solution(['apple', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple']))
