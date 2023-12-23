/*PRATICANDO VARIAVEIS, OPERADORES E ESTRUTURAS CONDICIONAIS
- MÉDIA DE NOTAS - EXERCÍCIO 01

#FAÇA UM ALGORITIMO QUE DADO AS 3 NOTAS TIRADAS POR UM ALUNO EM UM
SEMESTRE DA FACULDADE , CALCULE E IMPRIMA A SUA MÉDIA E A SUA CLASSIFICAÇÃO
CONFORME A TABELA ABAIXO.

MÉDIA = (NOTA 1 + NOTA 2 + NOTA 3 ) / 3;
CLASSIFICAÇÃO                    MÉDIA
MENOR QUE 5                      REPROVAÇÃO
ENTRE 5 e 7                      RECUPERAÇÃO
ACIMA DE 7                       PASSOU DE SEMESTRE

*/

const nota1 = 10;
const nota2 = 7;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

if(media < 5){
    console.log('Reprovação');
} else if (media >= 5 && media <= 7){
    console.log ('Recuperação');
} else {
    console.log ('Passou de semnestre');
}
