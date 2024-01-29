function solution(dots) {
  const x = [];
  const y = [];
  dots.forEach((num) => {
    x.push(num[0]);
    y.push(num[1]);
  });
  x.sort((a, b) => a - b);
  y.sort((a, b) => a - b);

  return (x[x.length - 1] - x[0]) * (y[y.length - 1] - y[0]);
}
