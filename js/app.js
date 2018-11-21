
const resetDisplay = () => document.getElementById('overlay').style.display = 'none';

const startButton = document.getElementById('btn__reset');
startButton.addEventListener('click', resetDisplay);
//^must also start a new game obj and start the game
