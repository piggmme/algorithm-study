// 23. 베스트 앨범
// https://school.programmers.co.kr/learn/courses/30/lessons/42579?language=javascript

function solution (genres, plays) {
  const musics = {}

  // {
  //  'classic': [ [ 0, 500 ], [ 2, 150 ], [ 3, 800 ] ],
  //  'pop': [ [ 1, 600 ], [ 4, 2500 ] ],
  // }
  genres.forEach((genre, index) => {
    if (musics[genre]) {
      musics[genre].push([index, plays[index]])
    } else {
      musics[genre] = [[index, plays[index]]]
    }
  })

  // 장르 내에서 많이 재생된 노래를 먼저 수록
  Object.entries(musics).forEach(([genre, music]) => {
    music.sort((a, b) => b[1] - a[1])
  })

  const result = Object.entries(musics)
    .sort((musics1, musics2) => {
      // 속한 노래가 많이 재생된 장르를 먼저 수록
      const sum1 = musics1[1].reduce((acc, cur) => acc + cur[1], 0)
      const sum2 = musics2[1].reduce((acc, cur) => acc + cur[1], 0)
      return sum2 - sum1
    })
    .map(music =>
      music[1]
        // 노래의 고유번호
        .map(([i]) => i)
        // 2개만
        .slice(0, 2))
    .flat()

  return result
}

console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500])) // [4, 1, 3, 0]
