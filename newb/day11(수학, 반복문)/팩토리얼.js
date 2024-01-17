function solution(n) {
  let answer = 1;
  let increse = 1;
  while (true) {
    answer *= increse;
    if (answer === n) return increse;
    if (answer > n) return increse - 1;
    increse += 1;
  }
}
