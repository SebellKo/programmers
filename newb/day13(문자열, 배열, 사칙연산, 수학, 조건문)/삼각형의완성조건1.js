function solution(sides) {
  const answer = sides.sort((a, b) => a - b);
  return answer[2] < answer[0] + answer[1] ? 1 : 2;
}
