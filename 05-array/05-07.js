// https://school.programmers.co.kr/learn/courses/30/lessons/49994?language=javascript
// 방문 길이

function isValid (x, y) {
  return x >= -5 && x <= 5 && y >= -5 && y <= 5
}

function updatePosition (x, y, direction) {
  switch (direction) {
    case 'U':
      return [x, y + 1]
    case 'D':
      return [x, y - 1]
    case 'R':
      return [x + 1, y]
    case 'L':
      return [x - 1, y]
  }
}

function solution (dirs) {
  const visited = new Set()
  let [x, y] = [0, 0]

  for (const dir of dirs) {
    const [newX, newY] = updatePosition(x, y, dir)
    if (isValid(newX, newY)) {
      visited.add(`${x}${y}${newX}${newY}`)
      visited.add(`${newX}${newY}${x}${y}`)

      ;[x, y] = [newX, newY]
    }
  }

  return visited.size / 2
}

console.log(solution('ULURRDLLU')) // 7
