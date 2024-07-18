let diceArray = [];
for (let i = 0; 1 < 6; i++) {
  let line = [];
  for (let k = 0; k < 6; k++) {
    line.push(Math.ceil(Math.random() * 6));
  }
  diceArray.push(line);
}
console.log(diceArray);
