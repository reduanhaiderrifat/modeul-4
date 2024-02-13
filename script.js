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
function getRandomAlphaber(){
    const aplhabets = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = aplhabets.split('');
   
    const random1 = Math.random()*25;
    const index = Math.round(random1);
   
    const alphabet1 = alphabet[index];
    
    return alphabet1;
}
function continueGame(){
    const alphabet = getRandomAlphaber();
    console.log(alphabet);
    const displayInput = document.getElementById('display-input');
    displayInput.innerText = alphabet;
     addBgColor(alphabet)

}
function play(){
    hideElement('home-screen');
    showElement('play-ground');
    continueGame()
}
