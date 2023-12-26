/*ESSE PROGRAMA VERIFICA SE O VALOR ATRIBUÍDO A VARIÁVEL numero É DIVISÍVEL POR 5.
   CONDIÇÕES: NÚMERO INVÁLIDO , SIM, NÃO.
*/


// ESTRUTURA ELSE IF


const numero = 27;
const numeroDivisivelPor5 = (numero % 5) === 0;
if(numero === 0) {
    console.log('O número é invalido');
}else if (numeroDivisivelPor5) {
    console.log('Sim');
}else {
    console.log('Não');

}
