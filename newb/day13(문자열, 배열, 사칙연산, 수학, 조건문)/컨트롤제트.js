function solution(s) {
  const str = s.split(' ');
  let answer = 0;
  str.forEach((num, index) => {
    if (num === 'Z') answer -= Number(str[index - 1]);
    else answer += Number(num);
  });

  return answer;
}
