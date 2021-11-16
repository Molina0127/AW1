const button = document.getElementById('button')

button.addEventListener('click', (event) => {
  
  const cpf = document.getElementById('cpf')
  const cnpj = document.getElementById('cnpj')
  const phone = document.getElementById('phone')
  const cep = document.getElementById('cep')
  const pis = document.getElementById('pis')

  if (cpf.value == '') {
      alert("error, o campo cpf não pode estar vazio")
  }

  if (cnpj.value == '') {
    alert("error, o campo cnpj não pode estar vazio")
  }

  if (phone.value == '') {
    alert("error, o campo telefone não pode estar vazio")
  }

  if (cep.value == '') {
    alert("error, o campo cep não pode estar vazio")
  }

  if (pis.value == '') {
    alert("error, o campo pis não pode estar vazio")
}

})