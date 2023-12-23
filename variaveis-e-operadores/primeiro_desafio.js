/* VARIÁVEIS E  TIPOS DE OPERADORES - EXERCICIO - 01
# Faça um programa para calcular o valor de uma viagem.
  Você terá 3 variáveis.Sendo assim elas:
  1. Preço do combustível
  2. Gasto médio de combustível do carro por KM.
  3. Distancia em KM da viagem

  -> Imprima no console o valor que será gasto de combustível para realizar essa viagem.
  */
  
// Declarando as Variáveis e atribuindo os valores a elas:
const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;
// Calculando o custo total de combustível necessário:
const litrosConsumidos = distanciaEmKm / kmPorLitros;

const valorGasto = litrosConsumidos * precoCombustivel;
console.log (valorGasto.toFixed(2));
/* Ou seja, com toFixed(2) ele vai mostrar apenas duas casas decimais após a virgula .*/
