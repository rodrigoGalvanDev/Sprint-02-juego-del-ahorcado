const $startGameButton = document.querySelector("#start-game")
const $introGame = document.querySelector("#intro-game")
const $addWordButton = document.querySelector("#add-word")
const $addWordGame = document.querySelector("#add-word-game")
const $cancellGameButton = document.querySelector('#cancell-game')
const $game = document.querySelector("#game")
const $newGameButton = document.querySelector("#new-game")
const $inputGame = document.querySelector("#input-game")

const palabra = 'Alura'

const startGame = () =>{

    $introGame.style.display = 'none'
    $game.style.display = 'block'
    $inputGame.focus()
    console.log($inputGame)
}

const cancellGame = () =>{

    $addWordGame.style.display = 'none'
    $game.style.display = 'none'
    $introGame.style.display = 'flex'
}

const addWord = () =>{

    $introGame.style.display = 'none'
    $addWordGame.style.display = 'block'

}



$newGameButton.onclick = cancellGame
$startGameButton.onclick = startGame
$addWordButton.onclick = addWord
$cancellGameButton.onclick = cancellGame