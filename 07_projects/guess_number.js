let randomNumber=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrhigh=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')
let prevGuess=[]
let numGuess=0;
let playGame=true;

// fist check u r able to play game or not
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    validateGuess(guess);
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert(`Please enter a valid number`)
  }else if((guess<1)){
    alert(`Please enter a valid number`)
  }else if((guess>100)){
    alert(`Please enter a number between 1 to 100`)
  }else{
    prevGuess.push(guess)
    if(numGuess===9){
      // displayGuess(guess);
      cleanupGuesses(guess);
      displayMessage(`Game Over, Random number was ${randomNumber}`);
      endGame()
    }else{
      // displayGuess(guess);
      cleanupGuesses(guess);
      checkGuess(guess)
    }
  }

}
function checkGuess(guess){
// check num is equal, low or high to rnadnumber
  if(guess===randomNumber){
    displayMessage(`You guessed it right`);
    endGame();
  }else if(guess<randomNumber){
    displayMessage(`Number is TOO low
    `)
  }else if(guess>randomNumber){
    displayMessage(`Number is TOO high
    `)
  }
}
// function displayGuess(guess){
function cleanupGuesses(guess){
  // after enter a number ,ye sari entry ko cleanup krne k liye
  // after enter number guess number ko clean kregga , guess arr ko update krga

  userInput.value='';
  guessSlot.innerHTML+=`${guess} `;//jinte bhi guess kr chuka h user usko add krte jaoo
  numGuess++;
  remaining.innerHTML=`${10-numGuess}`;
   
}

function displayMessage(message){
  //low or hi ek paragrph h jo ki low aur hig ko display krne k liye
  lowOrhigh.innerHTML=`<h2>${message}</h2>`;

}
function endGame(){
  userInput.value='';
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  //pargrph ke andr ek classlist add ki jo ki button ki trh behave kregi
  p.innerHTML='<h2 id="newGame">Start New Game</h2>'
  startOver.appendChild(p);
  playGame=false;
  newGame();
}
function newGame(){
  // new game ho rha h to jo bhi change huye h unko remove krna pdega
  const newGameButton=document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(){
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=0;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${10-numGuess} `
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  })
}