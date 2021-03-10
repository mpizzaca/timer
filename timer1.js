const arr = process.argv.slice(2).map(x => Number(x));
for (let num of arr) {
  if (num > 0 && typeof num === 'number' && isFinite(num)) setTimeout(() => console.log('beep!'), num * 1000);
}