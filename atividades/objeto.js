var pessoa = {
  idade: 17,
  nome: {
    primeiro_nome: 'Guilherme',
    nome_do_meio: 'Molina',
    ultimo_nome: 'Trindade'
  },
  sexo: 'Masculino',
  interesses: ['futebol', 'Cristo'],

  bio: function () {
    console.log(
      `${this.nome.primeiro_nome} ${this.nome.nome_do_meio} ${this.nome.ultimo_nome} tem ${this.idade} anos` +
        ` Ele gosta de ${this.interesses[0]} e ${this.interesses[1]}`
    )
  },

  saudacao: function () {
    console.log(
      `Olá ${pessoa['nome']['primeiro_nome']} ${pessoa['nome']['nome_do_meio']} ${pessoa['nome']['ultimo_nome']}  é um prazer te conhecer!`
    )
  }
}

console.log(pessoa)
console.log(pessoa.bio())
console.log(pessoa.saudacao())
