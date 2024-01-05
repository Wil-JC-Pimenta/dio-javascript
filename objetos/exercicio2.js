class Pessoa {
    nome;
    peso;
    altura;

constructor (nome, peso, altura){
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
}

calcularImc (){
    return this.peso / (this.altura * this.altura);
}
}
const jose = new Pessoa ('Jose', 70, 1.75);
console.log(jose);
console.log (jose.calcularImc());

/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos o atributo nome, peso e altura.
As pessoas devem ter a capacidade de dizer seu Imc (Imc = peso / (altura *altura));
Instancie uma pessoa chamada josé
que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu Imc.
*/