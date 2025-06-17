// 코딩 테스트 합격자되기 05-5
// 문제3 두 개 뽑아서 더하기
// 제약조건
// 1. 길이 2 이상 100 이하
// 2. 각 데이터 값은 0 이상 100 이하
function solution(numbers: number[]) {
  const ret: number[] = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      ret.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(ret)].sort((a, b) => a - b);
}

const result = solution([5, 0, 2, 7]);
console.log(result);
