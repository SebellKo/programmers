function solution(array) {
  var answer = 0;
  array.forEach((num) => {
    answer += [...String(num)].filter((num) => num === '7').length;
  });
  return answer;
}
