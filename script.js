function hideElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}
function setColor(color){
    const element = document.getElementById(color);
    element.classList.add('bg-orange-400')
}
function removeColor(color){
    const element = document.getElementById(color);
    element.classList.remove('bg-orange-400')
}
function handleKeyboard(event){
    const playerPress = event.key;
    // stop the game 
    if(playerPress === 'Escape'){
        gameOver()
    }
    const currentAlphabet = document.getElementById('current-alphabet')
    const currentLatter = currentAlphabet.innerText;
    const expectedlatter = currentLatter.toLowerCase();

   if(playerPress === expectedlatter){
   
    // console.log('correct',expectedlatter)
    // const currentscore = document.getElementById('score');
    // const scoreElement = currentscore.innerText;
    // const newScore = parseInt(scoreElement);
 const newScore = getElementById('score')
    const updateScore = newScore +1;
    setElementById('score',updateScore)
    
    // currentscore.innerText = score;
    removeColor(expectedlatter)
    continueGame()
   } else{
    console.log('in-correct')
    // const currentLife =document.getElementById('life');
    // const lifeElement = currentLife.innerText;
    // const newLife = parseInt(lifeElement);

     const newLife = getElementById('life')
    const life = newLife - 1;
    setElementById('life',life)
    if(life === 0){
        gameOver()
    }

    //  currentLife.innerText = life;
   }
}

function getElementById(elementId){
       const element = document.getElementById(elementId);
       const elementValue = element.innerText;
       const value = parseInt(elementValue);
       return value;
}
function setElementById(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText= value;
} 
document.addEventListener('keyup',handleKeyboard)
function randomAlphabet(){
    const alphabetstring = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetstring.split('');  
    const randomNumber= Math.random() * 25;
    const index = Math.round(randomNumber) ;
    const alphabet = alphabets[index];
    return alphabet;
}
function continueGame(){
const alphabet = randomAlphabet();
console.log(alphabet);

const currentElement = document.getElementById('current-alphabet');
currentElement.innerText = alphabet;
setColor(alphabet)

}

function getElementTextById(elementId){
const element = document.getElementById(elementId);
    const latter = element.innerText;
    return latter;  
}
function play(){
    
    hideElement('home')
    showElement('play-ground')
    hideElement('final-score')
    setElementById('life',5)
    setElementById('score',0)
    continueGame()
}
function gameOver(){
    hideElement('play-ground')
    showElement('final-score')
    const lastScore = getElementById('score')
    setElementById('last-score',lastScore)
    const currentAlphabet = getElementTextById('current-alphabet') ;
    removeColor(currentAlphabet)
    
}
function back(){
    hideElement('play-ground');
    showElement('home')
}