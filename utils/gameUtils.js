import input from 'analiza-sync';

function askRiddle(riddleObj) {
  let flag = true;
  while (flag) {
    console.log(riddleObj.name);
    console.log(riddleObj.taskDescription);
    for (let key in riddleObj) {
      if (key == 'choices') {
        console.log(riddleObj.choices);
      }
    }
    let userChoice = input('Youre answer:');
    if (userChoice == riddleObj.correctAnswer) {
      console.log('Correct Answer !!!');
      flag = false;
    } else {
      console.log('False!!!');
    }
  }
}
function mesureSolveTime(fn) {
  const start = Date.now();
  fn();
  const end = Date.now();
  return Math.floor((end - start) / 1000);
}

export { askRiddle, mesureSolveTime };
