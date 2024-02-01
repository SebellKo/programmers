function solution(my_string) {
  const check = /[^0-9]/g;
  const num = my_string.replace(check, ' ').trim().split(' ');
  return num.reduce((acc, cur) => (acc += Number(cur)), 0);
}
