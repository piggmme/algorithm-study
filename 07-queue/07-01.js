// 15. 요세푸스 문제

// N명의 사람이 원 형태로 서 있다.
// 각 사람은 1부터 N까지 번호표를 갖고 있다.
// 임의의 숫자 K가 주어졌을 때 다음과 같이 사람을 없앤다.

// 1번 번호표를 가진 사람을 기준으로 K번째 사람을 제거한다.
// 없앤 사람 다음 사람을 기준으로 하고 다시 K번째 사람을 제거한다.

// N과 K는 1이상 1000이하의 자연수

class Queue {
  items = []
  front = 0
  rear = 0

  push (item) {
    this.items.push(item)
    this.rear++
  }

  size () {
    return this.rear - this.front
  }

  pop () {
    if (this.size() === 0) return null
    const item = this.items[this.front]
    this.front++
    return item
  }
}
function solution (n, k) {
  let queue = new Queue()

  for (let i = 1; i <= n; i++) {
    queue.push(i)
  }

  while (queue.size() > 1) {
    for (let i = 0; i < k - 1; i++) {
      queue.push(queue.pop())
    }
    queue.pop()
  }

  return queue.pop()
}

function mysolution (n, k) {
  let queue = Array.from({ length: n }, (_, i) => i + 1)

  while (queue.length !== 1) {
    queue = [...queue.slice(k), ...queue.slice(0, k - 1)]
    console.log({ queue })
  }

  return queue[0]
}

console.log(solution(5, 2)) // 3
