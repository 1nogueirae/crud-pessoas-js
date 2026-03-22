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

function buscarPessoa (pessoa, nome){
    if (pessoa.nome === nome){
        return true
    } else {
        return null
    }
}

const pessoaBuscada = lista.find(pessoa => buscarPessoa(pessoa, "Fulano"))

console.log(pessoaBuscada)