// 코딩 테스트 합격자되기 09-5
// 문제29 다단계 칫솔 문제
// 제약조건
// 1. enroll 길이는 1 이상 10000 이하
// 2. referral의 길이는 enroll의 길이와 같습니다.
// 3. seller의 길이는 1 이상 10000 이하
// 4. amount의 길이는 seller와 같습니다.
// 5. 칫솔 1개당 가격은 100원
// 6. 조직원의 이름은 10글자 이내 영문 소문자
function solution(
  enroll: string[],
  referral: string[],
  seller: string[],
  amount: number[]
) {
  let result = "";

  let parent: { [index: string]: any } = {};
  for (let index = 0; index < enroll.length; index++) {
    parent[enroll[index]] = referral[index];
  }

  let total: { [index: string]: any } = {};
  for (let name of enroll) {
    total[name] = 0;
  }

  for (let index = 0; index < seller.length; index++) {
    let money = amount[index] * 100;
    let curName = seller[index];

    while (money > 0 && curName != "-") {
      total[curName] += money - Math.floor(money / 10);
      curName = parent[curName];

      money = Math.floor(money / 10);
    }
  }

  return enroll.map((name) => total[name]);
}

console.log(
  solution(
    ["john", "mary", "edward", "sam", "emily", "jaimie", "tod", "young"],
    ["-", "-", "mary", "edward", "mary", "mary", "jaimie", "edward"],
    ["young", "john", "tod", "emily", "mary"],
    [12, 4, 2, 5, 10]
  ),
  [360, 958, 108, 0, 450, 18, 180, 1080]
);
