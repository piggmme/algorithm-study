// 스택 구현하기
const stack = []
const maxSize = 10

function isFull (stack) {
  return stack.length >= maxSize
}

function isEmpty (stack) {
  return stack.length === 0
}

function push (stack, item) {
  if (isFull(stack)) {
    console.log('stack overflow')
    return
  }
  stack.push(item)
}

function pop (stack) {
  if (isEmpty(stack)) {
    console.log('stack underflow')
    return
  }
  return stack.pop()
}
