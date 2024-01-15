function solution(rsp) {
  return rsp.split('').reduce((acc, cur) => {
    if (cur === '0') acc += '5';
    if (cur === '2') acc += '0';
    if (cur === '5') acc += '2';
    return acc;
  }, '');
}
