const arr = process.argv.slice(2).sort((a, b) => a - b).map(x => Number(x));
for (let num of arr) {
  if (num > 0 && typeof num === 'number') setTimeout(() => console.log('beep!'), num * 1000);
}