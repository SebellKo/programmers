function solution(array) {
  var answer = 0;
  const countBoard = {};
  const arr = array.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    const count = matchedCount(arr, arr[i]);
    countBoard[`${arr[i]}`] = count;
    if (count > 2) i += count;
  }

  answer = findMostCount(countBoard);

  return answer;
}

const matchedCount = (arr, num) => {
  const count = arr.filter((number) => num === number).length;
  return count;
};

const findMostCount = (obj) => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  const max = Math.max(...values);
  const mostIndex = values.findIndex((number) => number === max);
  console.log(values);
  if (values.filter((number) => number === max).length >= 2) return -1;
  const most = Number(keys[mostIndex]);

  return most;
};
