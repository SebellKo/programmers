function solution(n) {
  let lcm = (6 * n) / getGcd(n, 6);
  return lcm / 6;
}

const getGcd = (num1, num2) => {
  const gcd = num1 % num2 ? getGcd(num2, num1 % num2) : num2;
  return gcd;
};
