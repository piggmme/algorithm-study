# 알고리즘 스터디

## 시간 복잡도

|시간 복잡도|최대 연산 횟수|
|------|---|
|`O(N!)`|10|
|`O(2^N)`|20~25|
|`O(N^3)`|200~300|
|`O(N^2)`|3,000~5,000|
|`O(NlogN)`|100만|
|`O(N)`|1,000~2,000만|
|`O(logN)`|10억|

> 데이터 갯수가 1,000만개 이하라면 `O(N)` 알고리즘을 사용할 수 있다.

### 별 찍기 문제 (`O(N^2)`)

`f(N) = 1 + 2 + ... + N = N(N+1)/2`

### 박테리아 수명 문제 (`O(logN)`)

특정 값을 계속 반으로 줄이는 동작을 한다면 `O(logN)`라고 생각하면 됨. (정렬, 이진트리)

## 빌트인 데이터 타입

### 숫자

```js
Math.abs(-a) // 절대값
Math.ceil(a / b) // 올림
Math.floor(a / b) // 내림
Math.round(a / b) // 반오올림
Math.trunc(-a / b) // 버림
Math.pow(a, b) // a^b
```

```js
// 부동소수점 문제
Number.EPSILON // 2.22044....
const a = 0.1 + 0.1 + 0.1
const b = 0.3

if (Math.abs(a-b) < Number.EPSILON) console.log('a와 b는 같은 값입니다.')
else console.log('a와 b는 다른 값입니다.')
```

### 문자열

```js
const a = "Hello, World!"
a.length // 13
a.split(',') // 특정 문자열 기준 나누기, ['Hello', 'World!']
a.startsWith('Hello') // 특정 문자열로 시작하는지 확인, true
a.endsWith('World!') // 특정 문자열로 끝나는지 확인, true
a.includes('llo, ') // 특정 문자열을 포함하는지 확인, true
a.indexOf('World') // 특정 문자열의 시작 위치 확인, 7
a.lastIndexOf('l') // 특정 문자열의 마지막 위치 확인, 10
a.replace('World', 'JavaScript') // 특정 문자열을 다른 문자열로 대체, Hello, JavaScript!
a.toUpperCase() // 대문자로 변환, HELLO, WORLD!
a.toLowerCase() // 소문자로 변환, hello, world!
a.trim() // 양쪽 공백 제거
a.concat('!!') // 문자열 연결, Hello, World!!!
```