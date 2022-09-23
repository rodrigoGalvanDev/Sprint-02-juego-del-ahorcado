

const $startGameButton = document.querySelector("#start-game")
const $introGame = document.querySelector("#intro-game")
const $addWordButton = document.querySelector("#add-word")
const $addWordGame = document.querySelector("#add-word-game")
const $cancellGameButton = document.querySelector('#cancell-game')
const $game = document.querySelector("#game")
const $newGameButton = document.querySelector("#new-game")
const $inputGame = document.querySelector("#input-game")
const $line = document.querySelector("#line")
const $sucessLetters = document.querySelector('#sucess-letters')
const $failLetters = document.querySelector('#fail-letters')
const $gallow = document.querySelector('#gallow')
const $wordGame = document.querySelector('#word-game')
const $lines = document.querySelector('.lines')
const $form = document.querySelector('form')


const words = ['CASA', 'PERRO', 'SQL']
    
let word = words[Math.floor(Math.random()*words.length)] 


const startGame = () =>{

    $introGame.style.display = 'none'
    $game.style.display = 'block'
    $inputGame.focus()

    setWord()

}



const setWord = () => {

    for(let i = 1; i < word.length; i++){

        const line = document.createElement('div')
        line.id = `line${i}`
        $lines.appendChild(line)
        
        const clon = $line.cloneNode(true)
        line.appendChild(clon)

    }

    
}



const verifyLetter = (e) =>{
    e.preventDefault();
    
    
    for(let i = 0; i < word.length; i++){
        

        if($inputGame.value.toUpperCase() === word[i]){
            const putWord = document.getElementById(`line${i}`)
            const characters = document.createElement('p')
            characters.id = `character${i}`
            characters.innerHTML = $inputGame.value.toUpperCase()
            putWord.prepend(characters)
        }

    }
    
    verifyError()
}

let errorCharacters = []
let counterErrors = 0

const verifyError = () =>{
    
    if (counterErrors < 9){
        if(word.includes($inputGame.value.toUpperCase()) === false){
            errorCharacters.push($inputGame.value.toUpperCase())
            $failLetters.innerHTML = errorCharacters.join('')
            counterErrors = counterErrors + 1
        }
    }

    if(counterErrors === 9){
        gameOver()
    }

    
    drawGallow()
    $form.reset()
}

const drawGallow = () =>{
    const try1 = document.querySelector(`#try1`)
    if(counterErrors === 1 ){
        try1.style.display = 'block'
    }
    const try2 = document.querySelector(`#try2`)
    if(counterErrors === 2 ){
        try2.style.display = 'block'
    }
    const try3 = document.querySelector(`#try3`)
    if(counterErrors === 3 ){
        try3.style.display = 'block'
    }
    const try4 = document.querySelector(`#try4`)
    if(counterErrors === 4 ){
        try4.style.display = 'block'
    }
    const try5 = document.querySelector(`#try5`)
    if(counterErrors === 5 ){
        try5.style.display = 'block'
    }
    const try6 = document.querySelector(`#try6`)
    if(counterErrors === 6 ){
        try6.style.display = 'block'
    }
    const try7 = document.querySelector(`#try7`)
    if(counterErrors === 7 ){
        try7.style.display = 'block'
    }
    const try8 = document.querySelector(`#try8`)
    if(counterErrors === 8 ){
        try8.style.display = 'block'
    }
    const try9 = document.querySelector(`#try9`)
    if(counterErrors === 9 ){
        try9.style.display = 'block'
    }
}

const gameOver = () =>{

    let h2 = document.createElement('h2')
    h2.id = 'game-over'
    h2.innerText = `Perdiste el juego la palabra era ${word}`

    $game.prepend(h2)
    $gallow.style.display = 'none'
    $wordGame.style.display = 'none'
    $cancellGameButton.style.display = 'none'

}


const cancellGame = () =>{

    $addWordGame.style.display = 'none';
    $game.style.display = 'none';
    $introGame.style.display = 'flex';

}

const newGame = () =>{

    resetGame()
    setWord()
    $gallow.style.display = 'flex'
    $wordGame.style.display = 'flex'
    $cancellGameButton.style.display = 'block'
    $inputGame.focus()

}

const surrender = () =>{

    $game.style.display = 'none';
    $introGame.style.display = 'flex';
    resetGame()
    $gallow.style.display = 'flex'
    $wordGame.style.display = 'flex'
    $cancellGameButton.style.display = 'block'

}


const resetGame = () =>{

    errorCharacters = []
    $failLetters.innerHTML = ''
    if(counterErrors === 9){
        const deleteH2 = document.getElementById('game-over')
        deleteH2.remove()   
    }
    counterErrors = 0
    
    for(let i = 0; i < word.length; i++){
        
        const deleteP = document.getElementById(`character${i}`)
        if(deleteP != null){
            deleteP.remove()
        }
        
    }

    for(let j = 1; j < word.length; j++){
    
        const deleteLine = document.getElementById(`line${j}`)
        deleteLine.remove()
    
    }

    word = words[Math.floor(Math.random()*words.length)]


    try1.style.display = 'none'
    try2.style.display = 'none'
    try3.style.display = 'none'
    try4.style.display = 'none'
    try5.style.display = 'none'
    try6.style.display = 'none'
    try7.style.display = 'none'
    try8.style.display = 'none'
    try9.style.display = 'none'
}

const addWord = () =>{

    $introGame.style.display = 'none'
    $addWordGame.style.display = 'block'

}



$newGameButton.onclick = newGame
$startGameButton.onclick = startGame
$addWordButton.onclick = addWord
$cancellGameButton.onclick = surrender
$form.onsubmit = verifyLetter
