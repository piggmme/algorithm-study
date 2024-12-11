// 22. 오픈 채팅방
// https://school.programmers.co.kr/learn/courses/30/lessons/42888?language=javascript
function solution (record) {
  const usersHash = new Map()
  record.forEach((message) => {
    const [action,
      uid,
      nickname] = message.split(' ')

    if (action === 'Enter' || action === 'Change') {
      usersHash.set(uid, nickname)
    }
  })

  return record.map((message) => {
    const [action, uid] = message.split(' ')
    if (action === 'Enter') {
      return `${usersHash.get(uid)}님이 들어왔습니다.`
    } else if (action === 'Leave') {
      return `${usersHash.get(uid)}님이 나갔습니다.`
    }
    return null
  }).filter(message => message)
}

console.log(solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan']))
// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
