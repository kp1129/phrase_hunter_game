class Game {
  constructor(){
    this.missed = 0;
    this.phrases = [
        //below are a handful of phrases from one of my favorite TV shows,
        //Arrested Development. Disclaimer: even though I loved the show,
        //the last season was dissapointingly terrible
     "solid as a rock",
     "mister manager",
     "for british eyes only",
     "sudden valley",
     "girl michael",
     "bob loblaw law blog",
     "and the bushes stand for bushes",
     "go see a star war",
     "hot ham water",
     "look at what the homosexuals have done to me",
     "why should you go to jail for a crime someone else noticed",
     "has anyone in this family even seen a chicken",
     "steve holt",
     "i love all my children equally",
     "my father is my uncle",
     "army had a half day",
     "marry me",
     "no touching",
     "i just blue myself",
     "burn bush",
     "maritime law",
     "i sunk the yacht",
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
    for(let i = 0; i < letters.length; i++){
      if(letters[i].classList.contains('hide letter')){
        return false;
      }
    }
    return true;
  }

  handleInteraction(clickedLetter){
    if(this.phrase.checkLetter(clickedLetter)){
        this.phrase.showMatchedLetter(clickedLetter);
        this.phrase.checkForWin();
    } else {
        this.removeLife();
    }

  }

  removeLife(){
    ++this.missed;
    const ol = document.getElementById('scoreboard').firstElementChild;
    ol.removeChild(ol.lastChild);
    //remove last child?
    if(ul.hasChildNodes() === false) {
      this.gameOver();
    }
  }
/*
  gameOver(){

  }
  */

}
