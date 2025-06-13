function getAllNumberCombinations(digits) {
  const results = new Set();
  const visited = new Array(digits.length).fill(false);

  function dfs(path) {
    if (path.length > 0) {
      results.add(parseInt(path.join("")));
    }

    for (let i = 0; i < digits.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      path.push(digits[i]);
      dfs(path);
      path.pop();
      visited[i] = false;
    }
  }

  dfs([]);
  return Array.from(results).sort((a, b) => a - b);
}

const digits = ["1", "2", "3", "3"];
console.log(getAllNumberCombinations(digits));
