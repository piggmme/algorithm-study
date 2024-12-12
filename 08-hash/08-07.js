// 24. 신고 결과 받기
// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

function solution (id_list, report, k) {
  // { [신고당한사람]: [신고한사람1, 신고한사람2]}
  const reportHash = {}

  report.forEach((message) => {
    const [sender, receiver] = message.split(' ')

    if (reportHash[receiver]) {
      if (!reportHash[receiver].includes(sender))
        reportHash[receiver].push(sender)
    } else {
      reportHash[receiver] = [sender]
    }
  })

  const user = {}
  id_list.forEach((id) => {
    user[id] = 0
  })

  Object.entries(reportHash)
    .filter(([_, senders]) => senders.length >= k)
    .forEach(([receiver, senders]) => {
      senders.forEach((sender) => {
        user[sender] += 1
      })
    })

  return id_list.map((id) => {
    return user[id]
  })
}

console.log(solution(
  ['muzi', 'frodo', 'apeach', 'neo'],
  ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi', 'muzi frodo'],
  2)) // [2,1,1,0]

console.log(solution(
  ['con', 'ryan'],
  ['ryan con', 'ryan con', 'ryan con', 'ryan con'],
  3)) // [0,0]
