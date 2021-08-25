import { createStore } from 'redux';
import { filterButtons } from './constants/general';

export const ACTIONS = {
  SET_TODOS: 'SET_TODOS',
  SET_FILTER_BUTTON: 'SET_FILTER_BUTTON',
};

const initialState = {
  todos: [],
  _todos: [],
  selectedFilterButton: filterButtons[0],
};

function reducer(state = initialState, action) {
  if (action.type === ACTIONS.SET_TODOS) {
    return { ...state, todos: action.payload, _todos: action.payload };
  }

  if (action.type === ACTIONS.SET_FILTER_BUTTON) {
    //all todos

    if (action.payload.id === 0) {
      return {
        ...state,
        selectedFilterButton: action.payload,
        todos: state._todos,
      };
    }
    //completed todos
    if (action.payload.id === 1) {
      const filteredTodos = state._todos.filter((todo) => todo.completed);
      return {
        ...state,
        todos: filteredTodos,
        selectedFilterButton: action.payload,
      };
    }
    //uncompleted todos
    if (action.payload.id === 2) {
      const filteredTodos = state._todos.filter((todo) => !todo.completed);
      return {
        ...state,
        selectedFilterButton: action.payload,
        todos: filteredTodos,
      };
    }
  }

  return state;
}

export const store = createStore(reducer);
