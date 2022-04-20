document.addEventListener('DOMContentLoaded', function() {
  let form = document.querySelector('form');
  let input = document.querySelector('#guess');
  let paragraph = document.querySelector('p');
  let link = document.querySelector('a');  
  let button = document.getElementsByTagName('input')[1];
  let answer;
  let guesses;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    paragraph.textContent = 'Guess a number from 1 to 100';
  }
  
  form.addEventListener('submit', event => {
    event.preventDefault();

    let guess = Number(input.value);
    if (Math.round(guess) !== guess){

    }
    let message;

    guesses += 1;

    if (Math.round(guess) !== guess || isNaN(guess)){
      message = 'Please enter an integer'
    } else if(guess > 100 || guess < 1){
      message = "Choose a number between 1 and 100"
    } else if (guess === answer) {
      message = `You guessed it! It took you ${guesses} guesses.`;
      
      button.disabled = true;
      button.style.background = '#ed9595'
      button.style.boxShadow = 'none'

    } else if (guess > answer) {
      message = `My number is lower than ${guess}`;
    } else {
      message = `My number is higher than ${guess}`;
    }
    
    paragraph.textContent = message;
  });

  link.addEventListener('click', event => {
    event.preventDefault();
    document.getElementsByTagName('input')[1].disabled = false;
    button.style.background = 'linear-gradient(to bottom, #CC183E 0%, #780E24 100%)';
    button.style.boxShadow = '0 0 1px 1px #780e24'
    newGame();
  });
  
  newGame();
  console.log(answer)
});