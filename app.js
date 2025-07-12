//DESAFIO 3 ALURA: LOOPS E REPETIÇÕES

//DESAFIO 1 
let numeroAlvo = 1;

while (numeroAlvo < 11) {
    let contador = numeroAlvo++;
    alert(contador);
}

//DESAFIO 2
let numeroAlvo = 10;

while (numeroAlvo > -1) {
    let contador = numeroAlvo--;
    console.log(contador);
    alert(contador);
}

//DESAFIO 3
let numeroAlvo = prompt("Diga um número aleatório");

while (numeroAlvo > -1) {
    let contador = numeroAlvo--;
    console.log(contador);
    alert(contador);
}

//DESAFIO 4
let numeroAlvo = prompt("Diga um número aleatório.");
let numeroInicial = 0;

while (numeroInicial <= numeroAlvo) {
    let contador = numeroInicial++;
    console.log(contador);
    alert(contador);
    
}