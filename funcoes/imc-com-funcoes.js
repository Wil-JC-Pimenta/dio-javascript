//CONHECENDO FUNÇÕES EM JAVASCRIPT

/* UMA FUNÇÃO É UM TRECHO DE CÓDIGO QUE VOCÊ PODE INVOCAR PARA REALIZAR A EXECUÇÃO VÁRIAS VEZES, TORNANDO
POSSÍVEL DINAMIZAR A EXECUÇÃO PASSANDO PARÂMETROS.*/

//EXEMPLO PRÁTICO DE FUNÇÕES

//REFATORAR O CÓDIGO ABAIXO PARA UTILIZAR FUNÇÕES:


/*
const peso = 80;
const altura = 1.75;
const imc = peso /Math.pow (altura, 2);
console.log (imc);

if (imc <18.5){
    console.log('Abaixo do peso');
}else if (imc >= 18.5 && imc < 25){
    console.log ('Peso normal');
}else if (imc >= 25 && imc < 30){
    console.log('Acima do peso');
}else if (imc >= 30 && imc < 40){
    console.log ('Obesidade');
}else {
    console.log('Obesidade grave');
}
*/


//CÓDIGO REFATORADO:




function calcularImc (peso , altura ){
    return peso/Math.pow (altura, 2);
}

function classificarImc (imc){
    if (imc < 18.5) {
        return 'Abaixo do peso';
    }else if (imc >= 18.5 && imc < 25){
        return 'Peso normal';
    }else if (imc >=25 && imc < 30){
        return 'Acima do peso';
    }else if (imc >=30 && imc < 40) {
        return 'Obesidade';
    }else {
        return 'Obesidade grave';
    }
}

function main() {
    const peso =80;
    const altura = 1.75;

    const imc = calcularImc (peso , altura);
    console.log(classificarImc (imc));

}
main();



//FUNÇÃO IMEDIATAMENTE INVOCADA:

/*

function calcularImc (peso , altura ){
    return peso/Math.pow (altura, 2);
}

function classificarImc (imc){
    if (imc < 18.5) {
        return 'Abaixo do peso';
    }else if (imc >= 18.5 && imc < 25){
        return 'Peso normal';
    }else if (imc >=25 && imc < 30){
        return 'Acima do peso';
    }else if (imc >=30 && imc < 40) {
        return 'Obesidade';
    }else {
        return 'Obesidade grave';
    }
}

(function main() {
    const peso =80;
    const altura = 1.75;

    const imc = calcularImc (peso , altura);
    console.log(classificarImc (imc));

}());

*/


//FUNÇÃO ANONIMA:


/*
function calcularImc(peso , altura ){
    return peso/Math.pow (altura, 2);
}

function classificarImc (imc){
    if (imc < 18.5) {
        return 'Abaixo do peso';
    }else if (imc >= 18.5 && imc < 25){
        return 'Peso normal';
    }else if (imc >=25 && imc < 30){
        return 'Acima do peso';
    }else if (imc >=30 && imc < 40) {
        return 'Obesidade';
    }else {
        return 'Obesidade grave';
    }
}

(function() {
    const peso =80;
    const altura = 1.75;

    const imc = calcularImc (peso , altura);
    console.log(classificarImc (imc));

}());

*/

