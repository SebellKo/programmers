function solution(numbers, k) {
  let copy = [];
  if (numbers.length < (k - 1) * 2) {
    for (let i = 0; i < ((k - 1) * 2) / numbers.length; i++) {
      copy = copy.concat(numbers);
    }
  } else {
    copy = numbers;
  }
  return copy[(k - 1) * 2];
}
