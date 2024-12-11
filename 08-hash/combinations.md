## 조합 (재귀)

```js
function getCombinations(arr, selectNumber) {
  if (selectNumber === 1) {
    return arr.map((item) => [item]);
  }

  const combinations = [];
  arr.forEach((fixed, index, originalArray) => {
    const rest = originalArray.slice(index + 1);
    const smallerCombinations = getCombinations(rest, selectNumber - 1);
    const combined = smallerCombinations.map((combination) => [fixed, ...combination]);
    combinations.push(...combined);
  });

  return combinations;
}
```

## 예제: 조합 만들기
배열 `[1, 2, 3, 4]`에서 `selectNumber = 2`일 때 동작 과정을 살펴볼게요.

---

### 첫 번째 호출: `getCombinations([1, 2, 3, 4], 2)`
- 배열: `[1, 2, 3, 4]`
- 선택 개수: `2`
이 호출에서는 `selectNumber === 1`이 아니기 때문에 `forEach`를 실행합니다.

첫 번째 반복: 고정 값(fixed) = `1`

- rest 배열: [2, 3, 4]
    - 1을 제외한 나머지 부분입니다.

- 재귀 호출: `getCombinations([2, 3, 4], 1)`
    - 여기서 `selectNumber - 1 = 1`이 됩니다.

---

### 2. 두 번째 호출: `getCombinations([2, 3, 4], 1)`
- 배열: `[2, 3, 4]`
- 선택 개수: `1`

이 호출에서는 `selectNumber === 1`이므로 기본 조건을 반환합니다:

```js
[[2], [3], [4]] // 각 원소를 배열로 감쌈
```

---

### 3. 결합
두 번째 호출에서 반환된 결과를 첫 번째 호출에서 결합합니다:

- `fixed = 1`
- `smallerCombinations = [[2], [3], [4]]`

각각의 조합에 1을 추가:

```js
[[1, 2], [1, 3], [1, 4]]
```

---

### 두 번째 반복: 고정 값(fixed) = 2
- rest 배열: `[3, 4]`
    - 2를 제외한 나머지 부분입니다.
- 재귀 호출: `getCombinations([3, 4], 1)`
    - 이 호출은 기본 조건을 반환합니다:

```js
[[3], [4]]
```

- 결합:
    - `fixed = 2`
    - `smallerCombinations = [[3], [4]]`

각각의 조합에 2를 추가:

```js
[[2, 3], [2, 4]]
```

---

### 세 번째 반복: 고정 값(fixed) = 3
- rest 배열: `[4]`
- 재귀 호출: `getCombinations([4], 1)`

기본 조건 반환:

```js
[[4]]
```

- 결합:
    - `fixed = 3`
    - `smallerCombinations = [[4]]`

결과:

```js
[[3, 4]]
```
---

### 최종 결과

각 반복의 결과를 합칩니다:

```js
[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
```

### 요약: 동작 과정
1. 배열에서 한 요소를 고정 (fixed)하고 나머지로 재귀 호출을 통해 조합을 생성합니다.
2. 기본 조건에 도달하면 조합이 반환됩니다.
3. 각 단계에서 고정된 요소를 재귀 호출의 결과와 결합해 최종 조합을 만듭니다.