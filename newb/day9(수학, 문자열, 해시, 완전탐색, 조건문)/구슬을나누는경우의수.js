function solution(balls, share) {
  if (balls === share) return 1;
  if (share === 1) return balls;
  const ballArr = Array.from({ length: share }, (_, i) => balls - i);
  const shareArr = Array.from({ length: share }, (_, i) => i + 1);

  return Math.round(
    ballArr.reduce((acc, cur) => acc * cur) /
      shareArr.reduce((acc, cur) => acc * cur)
  );
}
