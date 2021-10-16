const Modal = {
  open(){
    //Abrir modal
    //Abrir a classe active ao modal
    document.querySelector('.modal-overlay')
    .classList.add('active')
  },
  close(){
    //Fechar modal
    //Remover a classe active do modal
    document.querySelector('.modal-overlay')
    .classList.remove('active')
  }
}