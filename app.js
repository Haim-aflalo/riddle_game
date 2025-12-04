import input from 'analiza-sync';
import { createPlayer, addSolveTime, showStats } from './utils/userUtils.js';
import { mesureSolveTime, askRiddle } from './utils/gameUtils.js';
import { allRiddles } from './riddles/exportinRiddles.js';

function playGame() {
  console.log('Welcom To The Riddles Game!');
  let userName = input('Enter your name ');
  let user = createPlayer(userName);
  let timeRiddle1 = mesureSolveTime(() => askRiddle(allRiddles[0]));
  addSolveTime(user, timeRiddle1);
  let timeRiddle2 = mesureSolveTime(() => askRiddle(allRiddles[1]));
  addSolveTime(user, timeRiddle2);
  let timeRiddle3 = mesureSolveTime(() => askRiddle(allRiddles[2]));
  addSolveTime(user, timeRiddle3);
  let timeRiddle4 = mesureSolveTime(() => askRiddle(allRiddles[3]));
  addSolveTime(user, timeRiddle4);
  showStats(user);
}

playGame();
