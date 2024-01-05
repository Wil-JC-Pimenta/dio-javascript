class carro {
   marca;
   cor;
   gastoMedioPorKm;

   constructor(marca, cor,gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
   }
calcularGastoDePercurso (distanciaEmKm, precoCombustivel)
{
    return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
}
}
const uno = new carro ('Fiat', 'Prata', 12/1);
console.log(uno.calcularGastoDePercurso(70,5));
const gol = new carro ('Fiat', 'Prata', 7/1);
console.log(gol.calcularGastoDePercurso(70,5));
const palio = new carro ('Fiat', 'Prata', 16/1);
console.log(palio.calcularGastoDePercurso(70,5));


/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio por kilometro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o 
valor gasto em reais para realizar este percurso.
*/

