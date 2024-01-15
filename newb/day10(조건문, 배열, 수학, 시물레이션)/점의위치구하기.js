function solution(dot) {
  let answer = [];
  if (dot[0] > 0) answer = [1, 4];
  if (dot[0] < 0) answer = [2, 3];
  return dot[1] > 0 ? answer[0] : answer[1];
}
