function solution(polynomial) {
  let answer = '';
  const form = polynomial.split(' ');
  const x = form
    .filter((x) => x.includes('x'))
    .reduce((acc, cur) => {
      if (cur === 'x') return (acc += 1);
      acc += parseInt(cur);
      return acc;
    }, 0);
  const num = form
    .filter((num) => !isNaN(Number(num)))
    .reduce((acc, cur) => (acc += Number(cur)), 0);
  if (x === 0) answer += num;
  else if (num === 0) answer += `${x === 1 ? '' : x}x`;
  else answer = `${x === 1 ? '' : x}x + ${num}`;
  return answer;
}
// console.log(solution('3x + x + 7'));
// console.log(solution('7 + 3'));
// console.log(solution('3x + 4x'));
console.log(solution('x'));
