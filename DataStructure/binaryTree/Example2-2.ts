// *** 예제 코드 노드 객체 트리 사용 ***
// 코딩 테스트 합격자되기 09-4 몸풀기 문제
// 문제27 이진 탐색 트리 구현
// 제약조건
// 1. 첫번째 인수는 정수 배열 1000000 개 이하
// 2. 이진 탐색 트리의 삽입과 탐색
// 3. 두번째 인수의 길이는 10 이하

class Node {
  public left: number | null;
  public right: number | null;
  public val: number;

  constructor(key: number) {
    this.left = null;
    this.right = null;
    this.val = key;
  }
}

class BST {
  public root: Node | null;
  constructor() {
    this.root = null;
  }

  insert(key: number) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      let curr = this.root;
      while (true) {
        if (key < curr.val) {
          if (curr.left) {
            curr = curr.left;
          } else {
            curr.left = new Node(key);
            break;
          }
        } else {
          if (curr.right) {
            curr = curr.right;
          } else {
            curr.right = new Node(key);
            break;
          }
        }
      }
    }
  }

  search(key) {
    let curr = this.root;
    while (curr && curr.val !== key) {
      if (key < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return curr;
  }
}

function solution(list, searchList) {
  const bst = new BST();

  for (const key of list) {
    bst.insert(key);
  }

  const result = [];

  for (const searchVal of searchList) {
    if (bst.search(searchVal)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
