// 연습문제: 추억점수
// https://school.programmers.co.kr/learn/courses/30/lessons/176963
// 제약조건
// 1. name의 길이 = yearning의 길이은 3이상 100이하
// 1-1. name 원소의 길이는 3이상 7이하
// 1-2. 알파벳 소문자로만 구성
// 1-3. 중복값 없음
// 1-4. yearning의 값의 범위는 1이상 100이하
// 1-5. name[i] 사람의 점수 yearning[i]
// 2. photo의 길이는 3이상 100 이하
// 2-1. photo[i]의 길이는 1이상 100이하
// 2-2. photo[i] 원소는 알파벳 소문자로 구성
// 2-3. photo[i]의 원소는 중복값 없음
function solution(name: string[], yearning: number[], photo: Array<string[]>) {
  const point: { [index: string]: any } = {};

  for (const [index, person] of name.entries()) {
    point[person] = yearning[index];
  }

  const result = photo.map((order) =>
    order.reduce((accu, name) => {
      return accu + (point?.[name] ? point?.[name] : 0);
    }, 0)
  );

  return result;
}

console.log(
  solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [["may"], ["kein", "deny", "may"], ["kon", "coni"]]
  )
);
