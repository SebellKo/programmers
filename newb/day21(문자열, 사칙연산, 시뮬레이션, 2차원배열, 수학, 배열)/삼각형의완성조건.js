function solution(sides) {
  const [short, long] = sides.sort((a, b) => a - b);
  const sum = short + long;
  const answer = [];

  for (let i = 1; i <= long; i++) {
    if (short + i > long) answer.push(i);
  }
  for (let i = long + 1; i < sum; i++) {
    answer.push(i);
  }
  return answer.length;
}
