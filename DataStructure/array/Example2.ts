// 코딩 테스트 합격자되기 05-4 몸풀기 문제
// 문제2 배열 제어하기
// 제약조건
// 1. 배열 길이 2이상 1000 이하
// 2. 각 데이터 값은 -100,000 이상 100,000 이하

function solution(arr: number[]) {
  // 중복 제거 방법 O(N)
  const uniqueArr = [...new Set(arr)];

  // 내림차순 정렬 O(N log N)
  uniqueArr.sort((a, b) => b - a);
  return uniqueArr;
}

function measureTime(callback: Function, arr: number[]) {
  const start = Date.now();
  const result = callback(arr);
  const end = Date.now();

  return [end - start, result];
}

let arr = Array.from({ length: 10000 }, (_, k) => 10000 - k);

const [solutionTime, solutionResult] = measureTime(solution, arr);
console.log(`버블 sort 실행 시간 ${solutionTime}ms`);
