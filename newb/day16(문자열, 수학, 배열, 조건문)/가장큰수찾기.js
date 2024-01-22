function solution(array) {
  var answer = [...array].sort((a, b) => b - a);
  return [answer[0], array.findIndex((num) => num === answer[0])];
}
