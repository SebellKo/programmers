function solution(a, b) {
  const gcd = getGCD(a, b);
  const num = [a / gcd, b / gcd];
  const primeFactor = getPrimeFactor(num[1]);
  return primeFactor.filter((num) => num === 2 || num === 5).length ===
    primeFactor.length
    ? 1
    : 2;
}
const getGCD = (num1, num2) => (num1 % num2 ? getGCD(num2, num1 % num2) : num2);

const getPrimeFactor = (n) => {
  let answer = [];

  let i = 2;
  while (i <= n) {
    if (n % i === 0) {
      answer.push(i);
      n = n / i;
    } else {
      i++;
    }
  }

  return [...new Set(answer)];
};
