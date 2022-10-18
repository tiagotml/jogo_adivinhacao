//variaveis
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
const inputNumber = document.querySelector('#inputNumber');
let randomNumber = Math.round(Math.random() * 10);
let numTentativas = 1;
// eventos
btnTry.addEventListener('click', handleClick);
btnReset.addEventListener('click', handleReset);
document.addEventListener('keypress', (e) => {
    if (e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleReset();
    }
})
//funcao callback
function handleClick(event) {
    event.preventDefault();
    if (inputNumber.value >= 0 && inputNumber.value <= 10) {
        if (Number(inputNumber.value == '')) {
            alert('Digite um número!')
            numTentativas--;
        }
        if (Number(inputNumber.value) == randomNumber) {
            toggleScreen();
            screen2.querySelector('h2').innerText = `Você acertou em ${numTentativas} tentativas!`
        }
    }
    else {
        alert('Digite um número entre 0 e 10');
    }
    inputNumber.value = '';
    numTentativas++;

}

function handleReset() {
    toggleScreen();
    numTentativas = 1;
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
    screen2.classList.toggle('hide');
    screen1.classList.toggle('hide');
}