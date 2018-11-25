// Set selectors
const buttons = document.getElementsByClassName('key');
const startButton = document.getElementById('btn__reset');
const keys = document.getElementById('qwerty');
let newGame;

// This function resets the display
const resetDisplay = () => {
    const scoreboard = document.getElementById('scoreboard').firstElementChild;
    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = false;
        buttons[i].classList.remove('chosen');
    }
    let j = 0;
    let lives = "";
    const li = '<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>';
    while(j < 5){
        lives += li;
        j++;
    }
    scoreboard.innerHTML = lives;
    document.getElementById('overlay').style.display = 'none';
}

// This function visually marks buttons on the display keyboard and calls handleInteraction
const markButton = (e) => {
        const clickedLetter = e.target.innerText;
        e.target.disabled = true;
        e.target.classList.add('chosen');
        return newGame.handleInteraction(clickedLetter);
}

// Reset display when Start Game is clicked
startButton.addEventListener('click', function(e){
  newGame = new Game();
  resetDisplay();
  newGame.startGame();
});

// This event listener responds to the virtual keyboard
keys.addEventListener('click', function(e){
    if(e.target.tagName === 'BUTTON'){
        markButton(e);
    }
});

// This event listener enables users to use their physical keyboard
document.addEventListener('keydown', function(e){
    const regex = /[a-z]/
    if(regex.test(event.key)){
        for(let i = 0; i < buttons.length; i++){
            if(buttons[i].innerText === event.key){
                buttons[i].disabled = true;
                buttons[i].classList.add('chosen');
                return newGame.handleInteraction(event.key);
            }
        }
    }
});
