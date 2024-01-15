function solution(num_list, n) {
  const answer = [];
  let sub = [];
  for (let i = 0; i < num_list.length; i += n) {
    for (let j = 0; j < n; j++) {
      sub.push(num_list[j + i]);
    }
    answer.push(sub);
    sub = [];
  }
  return answer;
}
