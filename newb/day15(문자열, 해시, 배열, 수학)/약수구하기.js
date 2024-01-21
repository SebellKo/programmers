function solution(n) {
  var answer = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) answer.push([i, n / i]);
  }
  return [...new Set(answer.flat())].sort((a, b) => a - b);
}

console.log(solution(1));
