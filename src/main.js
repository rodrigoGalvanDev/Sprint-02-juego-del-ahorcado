

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
const $wordGame = document.querySelector('#word-game')
const $lines = document.querySelector('.lines')
const $form = document.querySelector('form')

const palabras = ['CASA', 'PERRO', 'SQL']
const palabra = palabras[Math.floor(Math.random()*palabras.length)]
// let palabraOculta = palabra.replace(/./g,' ')
// let wordArray = palabraOculta.split('')






const startGame = () =>{

    $introGame.style.display = 'none'
    $game.style.display = 'block'
    $inputGame.focus()
    setWord()
}

const setWord = () => {

    for(let i = 1; i < palabra.length; i++){

        const line = document.createElement('div')
        line.id = `line${i}`
        $lines.appendChild(line)
        
        const clon = $line.cloneNode(true)
        line.appendChild(clon)

    }
    
}



const verifyLetter = (e) =>{
    e.preventDefault();
    
    for(let i = 0; i < palabra.length; i++){
        

        if($inputGame.value.toUpperCase() === palabra[i]){
            const putWord = document.getElementById(`line${i}`)
            const characters = document.createElement('p')
            characters.id = `character${i}`
            characters.innerHTML = $inputGame.value.toUpperCase()
            putWord.prepend(characters)
        } else {
            verifyError()
        }

    }

}

const verifyError = () =>{
    
    for(let i = 0; i < palabra.length; i++){
        

        if($inputGame.value.toUpperCase() !== palabra[i]){
            let wrongCharacter = $inputGame.value.toUpperCase()

            $failLetters.innerHTML = wrongCharacter
        }

    }

}


   



const cancellGame = () =>{

    $addWordGame.style.display = 'none';
    $game.style.display = 'none';
    $introGame.style.display = 'flex';

}

const addWord = () =>{

    $introGame.style.display = 'none'
    $addWordGame.style.display = 'block'

}

const prueba = () =>{



    

}



$newGameButton.onclick = cancellGame
$startGameButton.onclick = startGame
$addWordButton.onclick = addWord
$cancellGameButton.onclick = cancellGame
$form.onsubmit = verifyLetter
