// Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número par encontrado.


const numeros = [0, 2, 3, 5, 6, 7 , 8 , 9 , 10 , 11 , 12 , 14, 18 , 20 , 21 , 22 , 30, 45, 50];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero %2 === 0){
        console.log(numero);
    }
    
}