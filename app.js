//variable and caching
let userScore = 0;
let computerScore = 0;
let countgame = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const text_div = document.querySelector('.textchoice');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');

//computer randomize choice
function randComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Win func 
function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  text_div.innerHTML = `<p>You chose ${user}</p>`;
  result_div.innerHTML = `<p>${user} beats ${computer}. You win!</p>`;  
  gameover(countgame);
}

// lose func 
function lose(user, computer) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  text_div.innerHTML = `You chose ${user}</p>`;
  result_div.innerHTML = `<p>${computer} beats ${user}. You lose!</p>`;
  gameover(countgame);
}

// draw 
function draw(user, computer) {
  text_div.innerHTML = `You chose ${user}</p>`;
  result_div.innerHTML = `<p>It was a draw! You both chose ${user}</p>`;
  gameover(countgame);
}

// posible combinations
function game(userChoice) {
 
  const computerChoice = randComputerChoice();
  countgame++; 		

  switch (userChoice + computerChoice) {
    case 'PaperRock':
    case 'RockScissors':
    case 'ScissorsPaper':
      win(userChoice, computerChoice);
      break;
    case 'RockPaper':
    case 'ScissorsRock':
    case 'PaperScissors':
      lose(userChoice, computerChoice);
      break;
    case 'RockRock':
    case 'ScissorsScissors':
    case 'PaperPaper':
      draw(userChoice, computerChoice);
      break;	  
  }
}

function gameover (countgame){
	if (userScore == 5 || computerScore == 5){
		if (userScore > computerScore) {
			result_div.innerHTML = `<p>Game Over! You won!</p>`;
			
			setTimeout(() => {location.reload();}, 500);
			}
	else{
			result_div.innerHTML = `<p>Game Over! You lost!</p>`;
			setTimeout(() => {location.reload();}, 500);
			}	
	}
}

function main() {
	
 

  rock_div.addEventListener('click', () => game('Rock'));
  paper_div.addEventListener('click', () => game('Paper'));
  scissors_div.addEventListener('click', () => game('Scissors'));	
}

main();
