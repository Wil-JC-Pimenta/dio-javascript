const vitor = {
    nome: 'Wilker J C Pimenta',
    idade: 25
};

vitor.altura = 1.69; // Adicionando a propriedade 'altura'
delete vitor.nome; // Removendo a propriedade 'nome'

// Adicionando novamente o nome ou modificando a idade
vitor.nome = 'Wilker'; // Adicionando novamente o nome
vitor.idade = 26; // Modificando a idade

console.log(vitor);
