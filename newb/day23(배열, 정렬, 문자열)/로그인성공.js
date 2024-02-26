function solution(id_pw, db) {
  const map = new Map(db);
  if (!map.get(id_pw[0])) return 'fail';
  return map.get(id_pw[0]) === id_pw[1] ? 'login' : 'wrong pw';
}
