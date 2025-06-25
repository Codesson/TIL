// 코딩 테스트 합격자되기 09-5
// 문제28 예상 대진표
// 제약조건
// 1. N : 2^1 이상 2^20 이하인 자연수 (2의 지수 승으로 주어지므로 부전승은 발생하지 않습니다.)
// 2. A, B : N 이하인 자연수 (단, A ≠ B 입니다.)
function solution(n: number, a: number, b: number) {
  let answer = 0;
  while (a != b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    answer += 1;
  }
  return answer;
}

console.log(solution(8, 4, 7));
