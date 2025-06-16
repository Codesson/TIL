// 코딩 테스트 합격자되기 05-4 몸풀기 문제
// 문제1 배열 정렬하기
// 제약조건
// 1. 정수 배열 길이는 2 이상 10^5 이하
// 2. 각 데이터 값은 -100,000 ~ 100,000

// 시간복잡도 O(n^2)
function bubbleSort(arr: number[]) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        const tmp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

// 시간복잡도 O(N log N);
function doSort(arr: number[]) {
  arr.sort((a, b) => a - b);
  return arr;
}

function measureTime(callback: Function, arr: number[]) {
  const start = Date.now();
  const result = callback(arr);
  const end = Date.now();

  return [end - start, result];
}

let arr = Array.from({ length: 10000 }, (_, k) => 10000 - k);
const [bubbleTime, bubbleResult] = measureTime(bubbleSort, arr);
console.log(`버블 sort 실행 시간 ${bubbleTime}ms`);

let arr2 = Array.from({ length: 10000 }, (_, k) => 10000 - k);
const [doSortTime, doSortResult] = measureTime(doSort, arr2);
console.log(`doSort 실행 시간 ${doSortTime}ms`);
