import input from 'analiza-sync';
import { createPlayer, addSolveTime, showStats } from './utils/userUtils.js';
import { mesureSolveTime, askRiddle } from './utils/gameUtils.js';
import {
  riddle1,
  riddle2,
  riddle3,
  riddle4,
} from './riddles/exportinRiddles.js';

function playGame() {
  console.log('Welcom To The Riddles Game!');
  let userName = input('Enter your name ');
  let user = createPlayer(userName);
  let timeRiddle1 = mesureSolveTime(() => askRiddle(riddle1));
  addSolveTime(user, timeRiddle1);
  let timeRiddle2 = mesureSolveTime(() => askRiddle(riddle2));
  addSolveTime(user, timeRiddle2);
  let timeRiddle3 = mesureSolveTime(() => askRiddle(riddle3));
  addSolveTime(user, timeRiddle3);
  let timeRiddle4 = mesureSolveTime(() => askRiddle(riddle4));
  addSolveTime(user, timeRiddle4);
  showStats(user);
}

playGame();
