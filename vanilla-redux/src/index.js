import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  console.log(state, action);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return [];
    default:
      return [];
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

const paintToDos = () => {
  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
  });
};

store.subscribe(paintToDos);

const addToDo = (text) => {
  store.dispatch({ type: ADD_TODO, text: text });
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  //   createToDo(toDo);
  addToDo(toDo);
};

form.addEventListener("submit", onSubmit);
/*


const createToDo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};



*/
