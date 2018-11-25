
const resetDisplay = () => document.getElementById('overlay').style.display = 'none';

const startButton = document.getElementById('btn__reset');

const keys = document.getElementById('qwerty');

let newGame;

startButton.addEventListener('click', function(e){
  resetDisplay();
  newGame = new Game();
  newGame.startGame();
});


const markButton = (e) => {
  const clickedLetter = e.target.innerText;
  e.target.disabled = true;
  return newGame.handleInteraction(clickedLetter);
}

keys.addEventListener('click', markButton);
