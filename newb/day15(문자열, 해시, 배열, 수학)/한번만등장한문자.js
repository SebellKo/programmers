function solution(s) {
  var answer = [];
  const str = [...s];
  str.forEach((letter) => {
    if (str.filter((str) => str === letter).length === 1) answer.push(letter);
  });
  return answer.sort().join('');
}
