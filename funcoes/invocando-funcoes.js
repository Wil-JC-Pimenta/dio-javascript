//INVOCANDO UMA FUNÇÃO DENTRO DE OUTRA FUNÇÃO

function escrevaMeunome (nome){
    return 'Meu nome é: ' + nome;
}

function verificarIdade (idade) {
    if (idade >= 18) {
        console.log(escrevaMeunome('Wilker') +',Sou Maior de Idade');
    }else {
        console.log(escrevaMeunome('Wilker')+ ',Sou Menor de Idade');
    }
}

verificarIdade(34);

