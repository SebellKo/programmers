function solution(bin1, bin2) {
  let sum = parseInt(bin1, 2) + parseInt(bin2, 2);
  return sum.toString(2);
}

let num = 10;
let str = '';
while (num > 1) {
  if (num % 2 === 1) str += '1';
  if (num % 2 === 0) str += '0';
  if (Math.floor(num / 2) === 1) str += '1';
  num = Math.floor(num / 2);
}

console.log([...str].reverse());
