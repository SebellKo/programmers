function solution(s1, s2) {
  var answer = 0;
  s1.forEach((letterS1) => {
    s2.forEach((letterS2) => {
      if (letterS1 === letterS2) answer += 1;
    });
  });
  return answer;
}
