function solution(i, j, k) {
  const arr = Array.from({ length: j - i + 1 }, (_, index) => i + index);
  return arr.reduce((acc, cur) => {
    const num = [...String(cur)].filter((num) => num === String(k));
    if (num.length !== 0) acc += num.length;
    return acc;
  }, 0);
}
