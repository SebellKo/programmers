function solution(numlist, n) {
  const sub = numlist
    .map((num) => {
      return { sub: Math.abs(n - num), num: num };
    })
    .sort((a, b) => a.sub - b.sub);
  const answer = sub.map((num, index) => {
    if (
      sub[index + 1] &&
      num.sub === sub[index + 1].sub &&
      num.num < sub[index + 1].num
    ) {
      const changedNum = sub[index + 1].num;
      sub[index + 1].num = num.num;
      return changedNum;
    }
    return num.num;
  });
  return answer;
}
