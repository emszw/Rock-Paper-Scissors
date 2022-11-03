const computerChoiceDisplay = document.getElementById('computer-choice')
const yourChoiceDisplay = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const allChoices = document.querySelectorAll('button')
let yourChoice
let computerChoice
let result

allChoices.forEach(allChoice => allChoice.addEventListener('click', (e) => {
    yourChoice = e.target.alt
    yourChoiceDisplay.innerHTML = yourChoice
    gettingComputerChoice()
    getResult()
}))

function gettingComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) 
    console.log(randomNumber)

    if (randomNumber === 0) {
        computerChoice = 'Rock'
    }

    if (randomNumber === 1) {
        computerChoice = 'Paper'
    }

    if (randomNumber === 2) {
        computerChoice = 'Scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === yourChoice) {
        result = 'Its a tie!'
    }

    if (computerChoice === 'Rock' && yourChoice === "Paper") {
        result = 'You Win!'
    }

    if (computerChoice === 'Paper' && yourChoice === "Scissors") {
        result = 'You Win!'
    }

    if (computerChoice === 'Scissors' && yourChoice === "Rock") {
        result = 'You Win!'
    }

    if (computerChoice === 'Paper' && yourChoice === "Rock") {
        result = 'You Lost :('
    }

    if (computerChoice === 'Scissors' && yourChoice === "Paper") {
        result = 'You Lost :('
    }

    if (computerChoice === 'Rock' && yourChoice === "Scissors") {
        result = 'You Lost :('
    }
    resultDisplay.innerHTML = result
}
