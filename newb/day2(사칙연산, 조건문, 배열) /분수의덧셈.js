function solution(numer1, denom1, numer2, denom2) {
  var answer = [];
  const lcm = getLCM(denom1, denom2);

  answer[0] = numer1 * (lcm / denom1) + numer2 * (lcm / denom2);
  answer[1] = lcm;

  if (answer[0] % answer[1] === 0) {
    answer[0] /= answer[1];
    answer[1] = 1;
  }

  const gcd = getGCD(answer[0], answer[1]);

  answer[0] /= gcd;
  answer[1] /= gcd;

  return answer;
}

let getGCD = (num1, num2) => {
  let gcd = 1;

  for (let i = 2; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

let getLCM = (num1, num2) => {
  let lcm = 1;

  while (true) {
    if (lcm % num1 == 0 && lcm % num2 == 0) {
      break;
    }
    lcm++;
  }
  return lcm;
};
