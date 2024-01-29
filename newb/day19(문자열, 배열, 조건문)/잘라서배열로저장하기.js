function solution(my_str, n) {
  const copy = [...my_str];
  const answer = [];
  while (copy.length !== 0) {
    answer.push(copy.splice(0, n).join(''));
  }

  return answer;
}
