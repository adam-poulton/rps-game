function game(){

  const results = document.querySelector('#result-container')
  const resultText = document.createElement('p')
  results.appendChild(resultText)
  const buttons = document.querySelectorAll('button')
  buttons.forEach(button => button.addEventListener('click', clickHandler))

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  function capitalise(string){
    return (string.slice(0,1).toUpperCase() 
    + string.slice(1).toLowerCase())
  }

  function computerPlay(){
    const options = ["Rock", "Paper", "Scissors"]
    return options[getRandomInt(options.length)]
  }

  function playRound(computerSelection, playerSelection){
    let result;
    playerSelection = capitalise(playerSelection);
    if (computerSelection == playerSelection){
      result = `Draw\n${playerSelection} draws with ${computerSelection}`;
    } else if (computerSelection === "Rock" && playerSelection === "Scissors" 
      || computerSelection === "Paper" && playerSelection === "Rock" 
      || computerSelection === "Scissors" && playerSelection === "Paper" ){
      result = `You Lose!\n${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "Rock" && playerSelection === "Paper"
      || computerSelection === "Paper" && playerSelection === "Scissors"
      || computerSelection === "Scissors" && playerSelection === "Rock"){
      result = `You Win!\n${computerSelection} is beaten by ${playerSelection}`;
    }
    return result;
  }

  function clickHandler(e){
    const selection = e.target.getAttribute('data-type');
    const result = playRound(computerPlay(), selection);
    resultText.innerText = result;
  }
}

game()




