// 코딩 테스트 합격자되기 09-4 몸풀기 문제
// 문제26 트리 순회
// 제약조건
// 1. 입력 노드 값 개수 1 이상 1000 이하
// 2. 정수형, 중복 없음
function preorder(nodes: number[], idx: number): number[] {
  if (idx < nodes.length) {
    return [
      nodes[idx],
      ...preorder(nodes, idx * 2 + 1),
      ...preorder(nodes, idx * 2 + 2),
    ];
  }

  return [];
}

function inorder(nodes: number[], idx: number): number[] {
  if (idx < nodes.length) {
    return [
      ...inorder(nodes, idx * 2 + 1),
      nodes[idx],
      ...inorder(nodes, idx * 2 + 2),
    ];
  }

  return [];
}

function postorder(nodes: number[], idx: number): number[] {
  if (idx < nodes.length) {
    return [
      ...postorder(nodes, idx * 2 + 1),
      ...postorder(nodes, idx * 2 + 2),
      nodes[idx],
    ];
  }

  return [];
}

function solution(nodes: number[]) {
  return [preorder(nodes, 0), inorder(nodes, 0), postorder(nodes, 0)];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7]));
