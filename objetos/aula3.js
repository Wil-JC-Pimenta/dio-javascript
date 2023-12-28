// Criando um objeto chamado 'pessoa'

const pessoa = {
    nome: 'Wilker J C Pimenta', // Propriedade nome com valor 'Wilker J C Pimenta'
    idade: 25, // Propriedade idade com valor 25

    // Adicionando um método chamado 'descrever' ao objeto
    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// Substituindo o método 'descrever' anterior por um novo método que só imprime o nome
pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

// Chamando o método 'descrever' do objeto 'pessoa', que agora só imprime o nome
pessoa.descrever();



pessoa.descrever();

/*

    Explicações:

    Criação do Objeto pessoa: Um objeto chamado pessoa é criado com duas propriedades, nome e idade.

    Método descrever: Um método chamado descrever é adicionado ao objeto pessoa. 
    Este método imprime uma mensagem que inclui o nome e a idade da pessoa.

    Sobrescrita do Método descrever: O método descrever é sobrescrito com uma nova 
    implementação que agora só imprime o nome.

    Chamada do Método descrever: O método descrever do objeto pessoa é chamado. 
    Neste caso, a versão do método que só imprime o nome é executada.

    Portanto, ao final, a saída no console será "Meu nome é Wilker J C Pimenta". 
    Isso ocorre porque o método descrever foi sobrescrito para imprimir apenas o nome, e não a idade.
*/
