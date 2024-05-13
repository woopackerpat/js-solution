let str = "";
for (let i = 2; i <= 12; i++) {
  for (let j = 1; j <= 12; j++) {
    str += `${i} x ${j} = ${i * j}\n`;
  }

  str += "\n";
}

console.log(str);
