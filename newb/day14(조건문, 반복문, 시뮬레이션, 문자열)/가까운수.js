function solution(array, n) {
  let answer = array
    .sort((a, b) => a - b)
    .map((num) => {
      return n - num < 0 ? -1 * (n - num) : n - num;
    });
  let curIndex = 0;
  let curNum = answer[0];

  answer.forEach((num, index) => {
    if (num < curNum) {
      curNum = num;
      curIndex = index;
    }
  });

  return array[curIndex];
}
