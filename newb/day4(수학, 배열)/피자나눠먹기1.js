function solution(n) {
  var answer = 0;
  const pieces = 7;
  let pizza = 0;
  let last = 0;

  if (n <= pieces) return 1;
  pizza = Math.floor(n / pieces);
  last = n % pieces;

  if (last > 0) return pizza + 1;

  answer = pizza;
  return answer;
}
