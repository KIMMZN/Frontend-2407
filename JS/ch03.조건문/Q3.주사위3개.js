// 주사위 3개 - 백준도장 2480
let dice1 = Math.ceil(Math.random() * 6);
let dice2 = Math.ceil(Math.random() * 6);
let dice3 = Math.ceil(Math.random() * 6);

let Prize = "";

if (dice1 == dice2 && dice2 == dice3) Prize = 10000 + dice1 * 1000;
else if (dice1 == dice2) Prize = 1000 + dice1 * 100;
else if (dice2 == dice3) Prize = 1000 + dice2 * 100;
else if (dice1 == dice3) Prize = 1000 + dice1 * 100;
else if (dice1 > dice2 && dice1 > dice3) Prize = dice1 * 100;
else if (dice2 > dice1 && dice2 > dice3) Prize = dice2 * 100;
else if (dice3 > dice1 && dice3 > dice2) Prize = dice3 * 100;

console.log(`주사위 A:${dice1} B:${dice2} C:${dice3} 상금: ${Prize}`);
