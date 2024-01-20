function solution(my_string) {
  return [...my_string]
    .map((letter) => {
      const letterCharCode = letter.charCodeAt();
      if (letterCharCode >= 97 && letterCharCode <= 122)
        return letter.toUpperCase();
      if (letterCharCode >= 65 && letterCharCode <= 90)
        return letter.toLowerCase();
    })
    .join('');
}
