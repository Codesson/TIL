// *** 직접 구현 배열 트리 사용 ***
// 코딩 테스트 합격자되기 09-4 몸풀기 문제
// 문제27 이진 탐색 트리 구현
// 제약조건
// 1. 첫번째 인수는 정수 배열 1000000 개 이하
// 2. 이진 탐색 트리의 삽입과 탐색
// 3. 두번째 인수의 길이는 10 이하
function createTree(
  target: number,
  nodeIndex: number,
  tree: number[]
): number[] {
  if (!tree[nodeIndex]) {
    tree[nodeIndex] = target;
    return tree;
  }

  if (target < tree[nodeIndex]) {
    if (!tree[nodeIndex * 2 + 1]) {
      tree[nodeIndex * 2 + 1] = target;
    } else {
      return createTree(target, nodeIndex * 2 + 1, tree);
    }
  } else {
    if (!tree[nodeIndex * 2 + 2]) {
      tree[nodeIndex * 2 + 2] = target;
    } else {
      return createTree(target, nodeIndex * 2 + 2, tree);
    }
  }

  return tree;
}

function findTarget(target: number, current: number, tree: number[]): boolean {
  if (tree[current] === target) {
    return true;
  } else if (tree.length < current) {
    return false;
  }

  if (target < tree[current]) {
    return findTarget(target, current * 2 + 1, tree);
  } else {
    return findTarget(target, current * 2 + 2, tree);
  }
}

function solution(first: number[], searchList: number[]): boolean[] {
  const tree: number[] = [];
  for (let value of first) {
    createTree(value, 0, tree);
  }

  return searchList.map((value) => findTarget(value, 0, tree));
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]));
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
