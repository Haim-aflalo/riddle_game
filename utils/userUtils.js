function createPlayer(name) {
  return { name: name, times: [] };
}

function addSolveTime(player, seconds) {
  player.times.push(seconds);
}

function showStats(player) {
  let totalTime = 0;
  let average = 0;
  player.times.forEach((element) => {
    totalTime += element;
  });
  average = totalTime / 4; //! change by nomber of riddles
  console.log(
    `your total time is ${totalTime} seconds \n your average time per riddle is ${average} seconds`
  );
}

export { createPlayer, addSolveTime, showStats };
