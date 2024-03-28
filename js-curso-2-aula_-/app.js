let listRandomNum = [];
let numLimit = 100;
let secretNum = generetaRandomNumber();
let Trys = 1

function exibirTextoNaTela (tag, text){
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
    responsiveVoice.speak(text, 'UK English Female', {rate:1.2});
}

function exibirMsgIninial(){
    exibirTextoNaTela ('h1', 'Welcome to the Game of Secret Number');
    exibirTextoNaTela ('p', 'Choose a number between 1 and 100');    
}

function verificarChute(){
    let Guess = document.querySelector('input').value;
    if (Guess == secretNum) { 
        exibirTextoNaTela('h1', 'Congratulations!');
        let wordTry = Trys > 1 ? 'trys' : 'try';
        let msgTry = `You find the number with ${Trys} ${wordTry}!`;
        exibirTextoNaTela('p', msgTry);
        document.getElementById('reiniciar').removeAttribute('disabled');
     } else{
            if (Guess > secretNum) {
                exibirTextoNaTela('p', `The secret number is lower than ${Guess}`);
            } else {
                exibirTextoNaTela('p', `The secret number is greater than ${Guess}`);
            }
            Trys++
            clearCamp();
     }    
}

function generetaRandomNumber(){
    let chooseNum = parseInt(Math.random() * numLimit + 1);
    let quantElemInList = listRandomNum.length;
    if (quantElemInList == numLimit) {
        listRandomNum = [];
    }
    if (listRandomNum.includes(chooseNum)){
        return generetaRandomNumber();
    }   else {
        listRandomNum.push(chooseNum);
        console.log(listRandomNum)
        return chooseNum;
    }
}

function clearCamp(){
    Guess = document.querySelector('input');
    Guess.value = '';
}

function restartGame(){
    secretNum = generetaRandomNumber();
    clearCamp();
    Trys = 1;
    exibirMsgIninial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}