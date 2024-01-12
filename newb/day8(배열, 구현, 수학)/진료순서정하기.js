function solution(emergency) {
  const answer = [...emergency];
  emergency.forEach((num, index) => {
    const emerNum = emergency.filter((num2) => num2 > num).length + 1;
    answer[index] = emerNum;
  });

  return answer;
}
