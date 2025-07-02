// 코딩 테스트 합격자되기 09-5
// 문제30 미로 탈출
// 제약조건
// 1. maps의 길이 5 이상 100 이하
// 2. maps[i]의 길이 5 이상 100 이하
// 3. 시작, 출구, 레버는 항상 다른 곳에 있음
// 4. 모든 길은 두번 지나갈 수 없음
class Queue {
  items: Array<number[]> = [];
  front = 0;
  rear = 0;

  push(item: number[]) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function isValidMove(
  ny: number,
  nx: number,
  n: number,
  m: number,
  maps: string[]
) {
  return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== "X";
}

function appendToQueue(
  ny: number,
  nx: number,
  k: number,
  time: number,
  visited: Array<any>,
  q: Queue
) {
  if (!visited[ny][nx][k]) {
    visited[ny][nx][k] = true;
    q.push([ny, nx, k, time + 1]);
  }
}

function solution(maps: string[]) {
  const n = maps.length;
  const m = maps[0].length;

  const visited = Array.from(Array(n), () =>
    Array(m)
      .fill(false)
      .map(() => Array(2).fill(false))
  );

  const dy: number[] = [-1, 1, 0, 0];
  const dx: number[] = [0, 0, -1, 1];

  const queue = new Queue();
  let endY: number = -1;
  let endX: number = -1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") {
        queue.push([i, j, 0, 0]);
        visited[i][j][0] = true;
      }

      if (maps[i][j] === "E") {
        endY = i;
        endX = j;
      }
    }
  }

  while (!queue.isEmpty()) {
    const [y, x, k, time] = queue.pop();
    console.log(y, x, k, time);

    if (y === endY && x === endX && k === 1) {
      return time;
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (!isValidMove(ny, nx, n, m, maps)) {
        continue;
      }

      if (maps[ny][nx] === "L") {
        appendToQueue(ny, nx, 1, time, visited, queue);
      } else {
        appendToQueue(ny, nx, k, time, visited, queue);
      }
    }
  }

  return -1;
}

// console.log(solution(["SOOOL", "XXXXO", "OOOOO", "OXXXX", "OOOOE"]));
console.log(solution(["LOOOS", "OOOOX", "OOOOO", "XOOOO", "EXOOO"]));
