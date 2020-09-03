import { createStore } from "./redux.js";

const INCREMENT = "increament";
const RESET = "reset";

function reducer(state = {}, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      count: state.count ? state.count + 1 : 1,
    };
  } else if (action.type === RESET) {
    return {
      ...state,
      count: action.resetCount || 0,
    };
  }

  return state;
}

function update() {
  console.log(store.getState());
}

const store = createStore(reducer);
store.subscribe(update);

function actionCreator(type, payload) {
  return {
    ...payload,
    type: type,
  };
}

function increament() {
  store.dispatch(actionCreator(INCREMENT));
}

function reset(resetCnt = 10) {
  store.dispatch(actionCreator(RESET, { resetCount: resetCnt }));
}

increament();
increament();
increament();
reset();
reset(0);
increament();
