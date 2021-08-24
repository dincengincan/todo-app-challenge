import { createStore } from 'redux';

export const ACTIONS = {
  SET_TODOS: 'SET_TODOS',
};

const initialState = {
  todos: [{ label: 'asaa' }],
};

function reducer(state = initialState, action) {
  if (action.type === ACTIONS.SET_TODOS) {
    return { ...state, todos: action.payload };
  }

  return state;
}

export const store = createStore(reducer);
