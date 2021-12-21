import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (state = 0, action) => {
  // console.log(state, action);
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(countModifier); //reducer를 "함수"로 넘겨줌

const onChange = () => {
  number.innerText = countStore.getState();
  console.log(countStore.getState());
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

/*
let count = 0; // 유일하게 바뀌는 data

number.innerText = count;

const updateText = () => {
  number.innerText = count;
};

const handleAdd = () => {
  count += 1;
  updateText();
};

const handleMinus = () => {
  count -= 1;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
*/
