let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);

    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors";
}

function win(user, comp)
{
    userScore++;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(comp)}${smallCompWord}. You win!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('green-glow');},2000);
}

function lose(user, comp)
{
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(comp)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. You lose...`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('red-glow');},2000);


}

function draw(user, comp)
{
    result_div.innerHTML = "All tied up !"; 
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(function(){document.getElementById(user).classList.remove('grey-glow');},2000);
}

function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice)
    {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice,computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice,computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;   
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })

    paper_div.addEventListener('click',function(){
        game("p");
    })

    scissors_div.addEventListener('click',function(){
        game("s");
    })
}

main();

