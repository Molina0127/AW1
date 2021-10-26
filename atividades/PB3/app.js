'use strict';

/*let database = [
  {'text' : 'Limpar a casa', 'status' : 'checked'},
  {'text' : 'Ver Netflix', 'status' : 'checked'},
  {'text' : 'Ver Netflix', 'status' : 'checked'}
];*/

const getDatabase = () => JSON.parse(localStorage.getItem("todoList")) ?? [];
const setDatabase = (database) => localStorage.setItem("todoList", JSON.stringify(database));

const createItem = (text, status = '', indice) => {
  const item = document.createElement('label');
  item.classList.add("todo__item");
  item.innerHTML = `
    <input type="checkbox" ${status} data-indice=${indice}>
    <div>${text}</div>
    <input type="button" value="X" data-indice=${indice}>
  `
  document.getElementById("todoList").appendChild(item);
}

const destroyTasks = () => {
  const todoList = document.getElementById('todoList');
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
}

const render = () => {
  destroyTasks();
  const database = getDatabase();
  database.forEach( (item, indice) => createItem(item.text, item.status, indice));
}

const addItem = (event) => {
  const key = event.key;
  const texto = event.target.value;
  if (key === "Enter"){
      const database = getDatabase();
      database.push({'text' : texto, 'status' : ''})
      setDatabase(database);
      event.target.value = ""
    }
  
  render();
} 

const removeItem = (indice) => {
  const database = getDatabase();
  database.splice(indice, 1);
  setDatabase(database);
  render();
}

const updateItem = (indice) => {
  
  database[indice].status = database[indice].status === "" ? "ckecked" : "";
  //const database = getDatabase();
  //setDatabase(database);  
  render();
}

const clickItem = (event) => {
  const element = event.target;
  if (element.type === "button") {
    const indice = element.dataset.indice;
    removeItem(indice); 
  }else if (element.type === "checkbox") {
    const indice = element.dataset.indice;
    updateItem(indice);
  }
}

document.getElementById('newItem').addEventListener('keypress', addItem);
document.getElementById('todoList').addEventListener('click', clickItem);

render();