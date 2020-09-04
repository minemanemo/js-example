import { createStore, createAction } from "./redux.js";

// Action 정의
const ACTION_INIT = "INIT";
const ACTION_INCR = "INCREAMENT";
const ACTION_DECR = "DECREAMENT";

// Reducer 정의
function reducer(state = {}, /* action */ { type, payload }) {
  switch (type) {
    case ACTION_INIT:
      return {
        ...state,
        count: payload.count || 0,
      }
    case ACTION_INCR:
      return {
        ...state,
        count: state.count + 1 || 0,
      }
    case ACTION_DECR:
      return {
        ...state,
        count: state.count - 1 || 0,
      }
    default:
      return { ...state };
  }
}

// Store 생성
const store = createStore(reducer);

// Subscriber 등록
store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch Wrapper 정의
const reset = (count = 0) => store.dispatch(createAction(ACTION_INIT, { count }));
const increament = () => store.dispatch(createAction(ACTION_INCR));
const decreament = () => store.dispatch(createAction(ACTION_DECR));

// function 실행
increament();
increament();
increament();
decreament();
reset();
reset(100);
increament();
decreament();
