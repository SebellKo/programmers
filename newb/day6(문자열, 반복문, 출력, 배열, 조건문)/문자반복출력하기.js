function solution(my_string, n) {
  const answer = [];
  [...my_string].forEach((value, index) => {
    answer[index] = value.repeat(n);
  });
  return answer.join('');
}
