function filtroMais18(listaPessoas) {
    if (listaPessoas.idade >= 18){
        return true
    }
}

const lista = [
    {
        "nome": "Fulano",
        "idade": 19
    },
    {
        "nome": "Ciclano",
        "idade": 14
    }
];

const listaFiltrada = lista.filter(filtroMais18);
console.log("Pessoas com maiores de 18 anos na lista:");
listaFiltrada.forEach(pessoa => {
    console.log(`===\nNome: ${pessoa.nome}\nIdade: ${pessoa.idade}\n====`);
});
