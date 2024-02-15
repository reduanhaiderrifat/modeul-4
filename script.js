// function play(){
// //    side the class first start 
// const homeScreen = document.getElementById('home-screen')
// homeScreen.classList.add('hidden');

// // show the play ground 
// const playGround = document.getElementById('play-ground');
// playGround.classList.remove('hidden')
// }

function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElement(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
function addBgColor(elementId){
      const element = document.getElementById(elementId);
      element.classList.add('bg-orange-400')
}
function removeBgColor(elementId){
      const element = document.getElementById(elementId);
      element.classList.remove('bg-orange-400')
}
function getRandomAlphaber(){
    const aplhabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = aplhabets.split('');
   
    const random1 = Math.random()*25;
    const index = Math.round(random1);
   
    const alphabet1 = alphabet[index];
    
    return alphabet1;
}
function setElementById(input,value){
    const element = document.getElementById(input);
    element.innerText = value;
}
function handleKeyboardButtonPress(event){
    const playerPress = event.key;
console.log('player press', playerPress);
const displayInput = document.getElementById('display-input')
const currentAlphabet = displayInput.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
console.log(playerPress,expectedAlphabet)
if(playerPress === expectedAlphabet){
   const scorenow = document.getElementById('score');
   const scoreNumber = scorenow.innerText;
   const recentScore = parseInt(scoreNumber);
   console.log(recentScore);
   const newscore = recentScore + 1;
   scorenow.innerText= newscore;
    removeBgColor(expectedAlphabet)
    continueGame();
} else{
    console.log('you lost a life')
    const currentLife = document.getElementById('life');
    const lifeNumber = currentLife.innerText;
    const lifeLess = parseInt(lifeNumber)-1;
    currentLife.innerText = lifeLess;
    if (lifeLess===0){
        gameOver()
    }
}
}
document.addEventListener('keyup',handleKeyboardButtonPress)

function continueGame(){
    const alphabet = getRandomAlphaber();
    console.log(alphabet);
    const displayInput = document.getElementById('display-input');
    displayInput.innerText = alphabet;
     addBgColor(alphabet)

}
function gameOver(){
    hideElement('play-ground')
    showElement('final-score')
    const gameScore = document.getElementById('score');
    const lastScore = gameScore.innerText;
    
    setElementById(lastScore)
    
}
function play(){
    hideElement('home-screen');
    hideElement('final-score');
    showElement('play-ground');
    setElementById('life',5);
    setElementById('score',0)
    continueGame()
}
