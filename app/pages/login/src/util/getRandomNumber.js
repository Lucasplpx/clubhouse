export function getRandomNumber() {
  const min = Math.ceil(0);
  const max = Math.floor(99);
  return Math.floor(Math.random() * (max - min)) + min;
}
