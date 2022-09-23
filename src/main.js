
const $startGameButton = document.querySelector("#start-game");
const $introGame = document.querySelector("#intro-game");
const $addWordButton = document.querySelector("#add-word");
const $addWordGame = document.querySelector("#add-word-game");
const $playGameWord = document.querySelector('#play-game-word')
const $textInputWord = document.querySelector('#textInput')
const $errorCharac = document.querySelector('.error-charac')
const $surrenderButton = document.querySelector('#surrender-game')
const $cancelGameButton = document.querySelector("#cancel-game");
const $game = document.querySelector("#game");
const $newGameButton = document.querySelector("#new-game");
const $inputGame = document.querySelector("#input-game");
const $line = document.querySelector("#line");
const $sucess = document.querySelector(".sucess");
const $failLetters = document.querySelector("#fail-letters");
const $gallow = document.querySelector("#gallow");
const $wordGame = document.querySelector("#word-game");
const $lines = document.querySelector(".lines");
const $form = document.querySelector("form");
const $footer = document.querySelector('.footer')

let words = ["CASA", "PERRO", "GATO", 'AUTO', 'ALURA', 'JAVA', 'ORACLE'];

let word = words[Math.floor(Math.random() * words.length)];

const startGame = () => {
  $introGame.style.display = "none";
  $game.style.display = "block";
  $inputGame.focus();
  $footer.style.display = 'none'
  setWord();
};

const setWord = () => {
  for (let i = 1; i < word.length; i++) {
    const line = document.createElement("div");
    line.id = `line${i}`;
    $lines.appendChild(line);

    const clon = $line.cloneNode(true);
    line.appendChild(clon);
  }
};

let counterAccert = 0;
let saveCharac = [];

const verifyLetter = (e) => {
  e.preventDefault();

  if (word.includes($inputGame.value.toUpperCase()) === true) {
    if (saveCharac.includes($inputGame.value.toUpperCase()) === false) {
      saveCharac.push($inputGame.value.toUpperCase());
      saveCharac.join();

      for (let i = 0; i < word.length; i++) {
        if ($inputGame.value.toUpperCase() === word[i]) {
          const putWord = document.getElementById(`line${i}`);
          const characters = document.createElement("p");
          characters.id = `character${i}`;
          characters.innerHTML = $inputGame.value.toUpperCase();
          putWord.prepend(characters);
          counterAccert = counterAccert + 1;
        }
      }
    }
  }

  if (counterAccert === word.length) {
    setTimeout(() => {
      gameWin();
    }, 500);
  }

  verifyError();
};

let errorCharacters = [];
let counterErrors = 0;

const verifyError = () => {
  if (counterErrors < 9) {
    if (errorCharacters.includes($inputGame.value.toUpperCase()) === true) {
      return;
    }
    if (word.includes($inputGame.value.toUpperCase()) === false) {
      errorCharacters.push($inputGame.value.toUpperCase());
      $failLetters.innerHTML = errorCharacters.join("");
      counterErrors = counterErrors + 1;
    }
  }

  if (counterErrors === 9) {
    setTimeout(() => {
      gameOver();
    }, 500);
  }

  drawGallow();
  $form.reset();
};

const gameWin = () => {
  let h2 = document.createElement("h2");
  h2.id = "game-win";
  h2.innerText = `Felicidades, ganaste el juego`;

  $game.prepend(h2);
  $gallow.style.display = "none";
  $wordGame.style.display = "none";
  $surrenderButton.style.display = "none";
};

const drawGallow = () => {
  const try1 = document.querySelector(`#try1`);
  if (counterErrors === 1) {
    try1.style.display = "block";
  }
  const try2 = document.querySelector(`#try2`);
  if (counterErrors === 2) {
    try2.style.display = "block";
  }
  const try3 = document.querySelector(`#try3`);
  if (counterErrors === 3) {
    try3.style.display = "block";
  }
  const try4 = document.querySelector(`#try4`);
  if (counterErrors === 4) {
    try4.style.display = "block";
  }
  const try5 = document.querySelector(`#try5`);
  if (counterErrors === 5) {
    try5.style.display = "block";
  }
  const try6 = document.querySelector(`#try6`);
  if (counterErrors === 6) {
    try6.style.display = "block";
  }
  const try7 = document.querySelector(`#try7`);
  if (counterErrors === 7) {
    try7.style.display = "block";
  }
  const try8 = document.querySelector(`#try8`);
  if (counterErrors === 8) {
    try8.style.display = "block";
  }
  const try9 = document.querySelector(`#try9`);
  if (counterErrors === 9) {
    try9.style.display = "block";
  }
};

const gameOver = () => {
  let h2 = document.createElement("h2");
  h2.id = "game-over";
  h2.innerText = `Perdiste el juego, la palabra era "${word}"`;

  $game.prepend(h2);
  $gallow.style.display = "none";
  $wordGame.style.display = "none";
  $surrenderButton.style.display = "none";
};

const cancelGame = () => {
  $addWordGame.style.display = "none";
  $game.style.display = "none";
  $introGame.style.display = "flex";
  $footer.style.display = 'block'
};

const newGame = () => {
  resetGame();
  setWord();
  $gallow.style.display = "flex";
  $wordGame.style.display = "flex";
  $surrenderButton.style.display = "block";
  $inputGame.focus();
};

const surrender = () => {
  $game.style.display = "none";
  $introGame.style.display = "flex";
  resetGame();
  $gallow.style.display = "flex";
  $wordGame.style.display = "flex";
  $surrenderButton.style.display = "block";
  $footer.style.display = 'block'
};

const resetGame = () => {
  errorCharacters = [];
  saveCharac = [];
  $failLetters.innerHTML = "";

  if (counterAccert === word.length) {
    const deleteGameWin = document.getElementById("game-win");
    deleteGameWin.remove();
  }

  if (counterErrors === 9) {
    const deleteGameOver = document.getElementById("game-over");
    deleteGameOver.remove();
  }

  counterErrors = 0;
  counterAccert = 0;

  for (let i = 0; i < word.length; i++) {
    const deleteP = document.getElementById(`character${i}`);
    if (deleteP != null) {
      deleteP.remove();
    }
  }

  for (let j = 1; j < word.length; j++) {
    const deleteLine = document.getElementById(`line${j}`);
    deleteLine.remove();
  }

  word = words[Math.floor(Math.random() * words.length)];

  try1.style.display = "none";
  try2.style.display = "none";
  try3.style.display = "none";
  try4.style.display = "none";
  try5.style.display = "none";
  try6.style.display = "none";
  try7.style.display = "none";
  try8.style.display = "none";
  try9.style.display = "none";
};

const addWord = () => {
  $introGame.style.display = "none";
  $addWordGame.style.display = "block";
  $footer.style.display = 'none'
};

const startGameWord = () =>{

  word = $textInputWord.value.toUpperCase().trim()

  if(word.length < 8 && word.length > 0){
    $addWordGame.style.display = "none";
    $errorCharac.style.display = 'none'
    startGame()

  } else{
    errorMaxCharacters()
  }

}

const errorMaxCharacters = () =>{

$errorCharac.style.display = 'block'

}

$newGameButton.onclick = newGame;
$startGameButton.onclick = startGame;
$addWordButton.onclick = addWord;
$surrenderButton.onclick = surrender;
$cancelGameButton.onclick = cancelGame;
$form.onsubmit = verifyLetter;
$playGameWord.onclick = startGameWord;

