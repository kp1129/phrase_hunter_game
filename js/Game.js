class Game {
  constructor(missed){
    this.missed = missed;
    this.phrases = [
     "solid as a rock",
     "mister manager",
     "for british eyes only",
     "sudden valley",
     "girl michael",
     "bob loblaw law blog",
     "and the bushes stand for bushes",
     "analrapist",
     "anyong",
     "go see a star war",
     "hot ham water",
     "look at what the homosexuals have done to me",
     "why should you go to jail for a crime someone else noticed",
     "has anyone in this family even seen a chicken",
     "steve holt",
     "i love all my children equally",
     "nevernude",
     "my father is my uncle",
     "army had a half day",
     "marry me",
     "no touching",
     "i just blue myself",
     "burn bush",
     "maritime law",
     "anustart",
     "i sunk the yacht",
     "brothero",
     "i made a huge mistake"
   ];
  }

  getRandomPhrase(){
    let ix = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[ix];
  }

  startGame(){
    const pickedPhrase = this.getRandomPhrase();
    const thisPhrase = new Phrase(pickedPhrase);
    thisPhrase.addPhraseToDisplay();
  }

  checkForWin(){
    const letters = document.getElementById('phrase').firstElementChild.children;
    let allDone = false;
    for(let i = 0; i < letters.length; i++){
      if(letters[i].classList.contains('letter'){
        if(letters[i].classList.contains('show'))
        //looped myself into a hole ughh resume from here tomorrow
      }
    }
  }

  handleInteraction(clickedLetter){
    if(this.phrase.checkLetter(clickedLetter)){
      this.phrase.showMatchedLetter(clickedLetter);
      this.checkForWin();
    } else {
      this.removeLife();
    }

  }



  removeLife(){
    ++this.missed;
    const ol = document.getElementById('scoreboard').firstElementChild;
    ol.removeChild(ol.childNodes[0]);
    if(ul.hasChildNodes() === false) {
      this.gameOver();
    }
  }

  gameOver(){

  }
}
