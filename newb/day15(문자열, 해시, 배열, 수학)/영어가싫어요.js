const numStr = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function solution(numbers) {
  const answer = [];
  let str = '';
  [...numbers].forEach((letter) => {
    str += letter;
    let index = numStr.findIndex((num) => num === str);
    if (index !== -1) {
      str = '';
      answer.push(index);
    }
  });
  return Number(answer.join(''));
}
