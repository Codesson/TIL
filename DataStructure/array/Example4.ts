// 코딩 테스트 합격자되기 05-6
// 문제4 모의고사
// 제약조건
// 1. 시험 문제는 최대 10000
// 2. 문제의 정답은 1, 2, 3, 4, 5
// 3. 가장 높은 점수를 받은 사람이 여러 사람이라면 반환하는 값을 오름차순으로 정렬
function solution(answers: number[]) {
  const patterns: Array<number[]> = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores: number[] = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        scores[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...scores);

  const highestScores: number[] = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === maxScore) {
      highestScores.push(i + 1);
    }
  }

  return highestScores;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
