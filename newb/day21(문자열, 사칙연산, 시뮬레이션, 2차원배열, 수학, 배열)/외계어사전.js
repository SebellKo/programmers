function solution(spell, dic) {
  const check = new RegExp(`[^${[...spell]}]`, 'g');
  const answer = dic.map((letter) => {
    const replacedLetter = letter.replace(check, '');
    const set = new Set([...replacedLetter]);
    if (set.size === spell.length) return letter;
    return null;
  });

  return answer.filter((letter) => letter !== null).length >= 1 ? 1 : 2;
}
