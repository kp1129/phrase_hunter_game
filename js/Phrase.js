class Phrase {
  constructor(phrase){
    this.phrase = phrase;
  }

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

  showMatchedLetter(letter){
    const lis = document.getElementById('phrase').firstElementChild.children;
    for(let i = 0; i < lis.length; i++){
      if(lis[i].innerText === letter){
        //what's with 'hide'? it's not in css
        lis[i].classList.remove('hide');
        lis[i].classList.add('show');
      }
    }
  }

  checkLetter(letter){
    if(this.phrase.indexOf(letter) > -1){
      return true;
    } else {
      return false;
    }
  }
}
