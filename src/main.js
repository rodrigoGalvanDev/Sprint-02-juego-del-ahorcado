const $startGameButton = document.querySelector("#start-game")
const $introGame = document.querySelector("#intro-game")
const $addWordButton = document.querySelector("#add-word")
const $addWordGame = document.querySelector("#add-word-game")
const $cancellGameButton = document.querySelector('#cancell-game')



const startGame = () =>{

    $introGame.style.display = 'none'

}
 

const addWord = () =>{

    $introGame.style.display = 'none'
    $addWordGame.style.display = 'block'

}

const cancellGame = () =>{

    $addWordGame.style.display = 'none'
    $introGame.style.display = 'flex'
}



$startGameButton.onclick = startGame

$addWordButton.onclick = addWord
$cancellGameButton.onclick = cancellGame