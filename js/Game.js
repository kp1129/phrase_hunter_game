// Create a placeholder for an instance of Phrase for later
let thisPhrase;

class Game {
  constructor(){
    this.missed = 0;
    this.phrases = [
        // Below are a handful of phrases from one of my favorite TV shows,
        // Arrested Development.
     "solid as a rock",
     "mister manager",
     "for british eyes only",
     "sudden valley",
     "girl michael",
     "bob loblaw law blog",
     "go see a star war",
     "hot ham water",
     "steve holt",
     "my father is my uncle",
     "army had a half day",
     "marry me",
     "no touching",
     "burn bush",
     "maritime law",
     "i sunk the yacht",
     "i made a huge mistake"
   ];
  }

// class method that starts the game
  startGame(){
    const pickedPhrase = this.getRandomPhrase();
    thisPhrase = new Phrase(pickedPhrase);
    thisPhrase.addPhraseToDisplay();
  }

// choose a phrase at random
  getRandomPhrase(){
    let ix = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[ix];
  }

// check if the user has guessed the entire phrase
  checkForWin(){
    const letters = document.getElementById('phrase').firstElementChild.children;
    let win = true;
    for(let i = 0; i < letters.length; i++){
        if(letters[i].classList.contains('letter')){
            if(letters[i].classList.contains('hide')){
                win = false;
                return win;
            }
        }
    }
    return this.gameOver(win);
  }

// the following method checks if the chosen letter is in the phrase,
// and removes a life if it's not
  handleInteraction(clickedLetter){
    if(thisPhrase.checkLetter(clickedLetter)){
        thisPhrase.showMatchedLetter(clickedLetter);
        this.checkForWin();
    } else {
        this.removeLife();
    }
  }

// this method removes a life (increases the # of missed attempts
// and removes a heart at the bottom of the virtual keyboard)
  removeLife(){
    this.missed = this.missed + 1;
    if(this.missed === 5) {
      this.gameOver(false);
    }
    const ol = document.getElementById('scoreboard').firstElementChild;
    ol.removeChild(ol.firstElementChild);
  }

// this method displays the game over message
  gameOver(win){
    let message = "";
    if(win === false || this.missed === 5){
        message = "You lose!";
    } else if (win === true) {
        message = "You win!";
    }
    document.getElementById('game-over-message').innerText = message;
    document.getElementById('overlay').style.display = '';
  }
}
