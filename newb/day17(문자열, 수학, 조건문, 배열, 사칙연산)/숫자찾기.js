function solution(num, k) {
  return `${num}`.includes(`${k}`)
    ? [...`${num}`].findIndex((num) => num === `${k}`) + 1
    : -1;
}
