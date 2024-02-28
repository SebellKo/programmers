function solution(before, after) {
  return [...before]
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('') ===
    [...after].sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('')
    ? 1
    : 0;
}
