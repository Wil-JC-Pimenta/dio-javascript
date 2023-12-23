/*CÁLCULO DO IMC - EXERCÍCIO 2
# O IMC - Indice de Massa Corporal é um critério da Organização Mundial da Saúde 
para  dar uma  indicação sobre a condição do peso de uma pessoa adulta.

FORMULA DO IMC:
IMC = Peso / (Altura²)
Se o IMC for menor que 18,5: ABAIXO DO PESO IDEAL
Entre 18,5 e 25: PESO NORMAL
Entre 25,0 e 30: SOBREPESO
Entre 30,0 e 40: OBESIDADE
Acima de 40: OBESIDADE GRAVE

ELABORE UM ALGORITIMO QUE DADO O PESO E A ALTURA DE UM ADULTO, MOSTRE SUA CONDIÇÃO DE ACORDO COM A TABELA.

*/

const peso = 70;
const altura = 1.59;
const imc = peso / Math.pow(altura, 2); // Method Math.pow(x: number, y: number)

if (imc < 18.5){
    console.log('Abaixo do peso');

} else if (imc >=18.5 && imc < 25){
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso');
}else if (imc >= 30 && imc < 40){
    console.log('Obesidade');
} else{
    console.log('Obesidade grave');
}
