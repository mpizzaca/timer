const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

let timeout = setTimeout(() => {}, 0);

stdin.on('data', key => {
    // handle ctrl+c
    if (key === '\u0003') {
      process.stdout.write('Thanks for using me, ciao!\n');
      process.exit();
    } else if (key === 'b') {
      process.stdout.write('beep!\n');
    } else if (key === 'c' && !timeout._destroyed) {
      clearTimeout(timeout);
      process.stdout.write(`timer cancelled\n`);
    } else if (typeof Number(key) === 'number' && isFinite(Number(key))) {
      key = Number(key);
      process.stdout.write(`setting timer for ${key} seconds... press 'c' to cancel\n`);
      timeout = setTimeout(() => {
        process.stdout.write(`beep!\n`);
      }, key * 1000);
    }
  }
);