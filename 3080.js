//hub
console.log('--------------')
console.log('|   hs-game  |')
console.log('--------------')
console.log(' ')
console.log('---------------')
console.log('|》1.games    | ')
console.log('|》2.gamestore|')
console.log('---------------')
//sistema de escolha

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Escolha uma opção (1 ou 2): ', (answer) => {
  switch(answer) {
    case '1':
      const fs = require('fs');

fs.readFile('games.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const games = JSON.parse(data);
  console.log(games);
});

      break;
    case '2':
      console.log('em breve');
      break;
    default:
      console.log('Opção inválida.');
      break;
  }
  
  rl.close();
});

