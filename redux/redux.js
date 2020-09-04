export function createStore(reducer) {
  // 상태 저장 변수 선언
  let state;

  // 구독자 저장 리스트 선언
  const listeners = [];

  // 구독 함수
  const subscribe = (subscriber, context = null) => {
    listeners.push({
      subscriber,
      context,
    });
  };

  // 출판 함수
  const publish = () => {
    listeners.forEach(({subscriber, context}) => {
      subscriber.call(context);
    });
  };

  // 상태 반환 함수
  const getState = () => ({ ...state });

  // 상태 업데이트 함수
  const dispatch = (action) => {
    state = reducer(state, action);
    publish();
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export const createAction = (type, payload = {}) => ({
  type,
  payload: { ...payload },
});