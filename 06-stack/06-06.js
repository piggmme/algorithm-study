// https://school.programmers.co.kr/learn/courses/30/lessons/64061?language=javascript
// 크레인 인형 뽑기 게임

function solution (board, moves) {
  const boardStacks = Array(board.length).fill().map(() => [])

  const reversedBoard = board.reverse()
  for (const floor of reversedBoard) {
    floor.forEach((item, index) => {
      if (item !== 0) {
        boardStacks[index].push(item)
      }
    })
  }

  let count = 0
  const stack = []
  for (const move of moves) {
    const index = move - 1
    const top = boardStacks[index].pop()
    if (top) stack.push(top)

    if (stack.length > 1 && stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop()
      stack.pop()
      count += 2
    }
  }

  return count
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4])) // 4
