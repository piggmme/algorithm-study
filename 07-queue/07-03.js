// 17. 카드 뭉치
// https://school.programmers.co.kr/learn/courses/30/lessons/159994?language=javascript

function solution (cards1, cards2, goal) {
  const queue = []

  while (goal.length) {
    if (cards1.length > 0 && cards1[0] === goal[0]) {
      queue.push(cards1.shift())
      goal.shift()
    } else if (cards2.length > 0 && cards2[0] === goal[0]) {
      queue.push(cards2.shift())
      goal.shift()
    } else {
      return 'No'
    }
  }
  return 'Yes'
}

console.log(solution(['i', 'drink', 'water'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])) // Yes
console.log(solution(['i', 'water', 'drink'], ['want', 'to'], ['i', 'want', 'to', 'drink', 'water'])) // No
