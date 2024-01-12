function solution(n) {
  let answer = 1;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) answer += 1;
  }
  return answer;
}
