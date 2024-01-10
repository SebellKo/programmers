function solution(money) {
  var answer = [];
  const price = 5500;
  answer[0] = Math.floor(money / price);
  answer[1] = money % price;
  return answer;
}
