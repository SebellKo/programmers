function solution(n) {
  const decimal = findDecimal(n);
  return decimal.filter((num) => n % num === 0);
}

const findDecimal = (num) => {
  const decimal = [];
  for (let i = 1; i <= num; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count === 2) decimal.push(i);
  }

  return decimal;
};
