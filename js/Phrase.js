class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

// class method that displays the chosen phrase
  addPhraseToDisplay() {
    let phraseToDisplay = ``;
    let phrase = this.phrase;
    for(let i = 0; i < phrase.length; i++){
      let li;
      if(phrase[i] !== " "){
        li = `<li class="hide letter ${phrase[i]}">${phrase[i]}</li>`;
        phraseToDisplay += li;
      } else {
        li = `<li class="hide space"> </li>`;
        phraseToDisplay += li;
      }
    }
    const ul = document.getElementsByTagName('ul')[0];
    ul.innerHTML = phraseToDisplay;
  }

// class method that displays matched letters
  showMatchedLetter(letter){
    const lis = document.getElementById('phrase').firstElementChild.children;
    for(let i = 0; i < lis.length; i++){
      if(lis[i].innerText === letter){
        lis[i].classList.remove('hide');
        lis[i].classList.add('show');
      }
    }
  }

// class method that checks if a letter is in the phrase
  checkLetter(letter){
    if(this.phrase.indexOf(letter) > -1){
      return true;
    } else {
      return false;
    }
  }
}
