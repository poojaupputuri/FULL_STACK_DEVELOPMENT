const matchState = {
  teamA: 0,
  teamB: 0
};
function updateScore(team, points) {
  let newScore;
  if (team === "A") {
    newScore = matchState.teamA + points;
    matchState.teamA = newScore;
  } else if (team === "B") {
    newScore = matchState.teamB + points;
    matchState.teamB = newScore;
  }

  displayScore();
}
function resetScore() {
  matchState.teamA = 0;
  matchState.teamB = 0;
  displayScore();
}
function displayScore() {
  document.getElementById("score").textContent =
    `Team A: ${matchState.teamA} | Team B: ${matchState.teamB}`;
}