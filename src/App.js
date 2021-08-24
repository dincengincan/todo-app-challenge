import { useDispatch } from 'react-redux';

import AddTodo from './components/add-todo/AddTodo';
import Layout from './components/layout/Layout';

import TodoList from './components/todo-list/TodoList';

import './styles.css';
import { useCallback, useEffect, useState } from 'react';
import { FETCH_URL } from './constants/general';
import { ACTIONS } from './store';
import Modal from './components/modal/Modal';
import Textfield from './components/textfield/Textfield';
import EditTodoContent from './components/edit-todo-content/EditTodoContent';

function App() {
  const dispatch = useDispatch();
  const [showEditModal, setShowEditModal] = useState(true);

  const handleTodoRemove = async (todoId) => {
    const settings = {
      method: 'DELETE',
    };
    try {
      const fetchResponse = await fetch(`${FETCH_URL}/${todoId}`, settings);
      const data = await fetchResponse.json();
      if (data) {
        fetchTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTodoAdd = async (todoInput) => {
    const settings = {
      method: 'POST',
      body: JSON.stringify({
        label: todoInput,
        checked: false,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(FETCH_URL, settings);
      const data = await fetchResponse.json();
      if (data) {
        fetchTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTodoComplete = async (todo) => {
    console.log(todo);
    const settings = {
      method: 'PUT',
      body: JSON.stringify({
        completed: !todo.completed,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(`${FETCH_URL}/${todo.id}`, settings);
      const data = await fetchResponse.json();
      if (data) {
        fetchTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTodoEdit = async (todoId) => {
    setShowEditModal(true);
    const settings = {
      method: 'PUT',
      body: JSON.stringify({
        completed: true,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(`${FETCH_URL}/${todoId}`, settings);
      const data = await fetchResponse.json();
      if (data) {
        fetchTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTodos = useCallback(async () => {
    try {
      const response = await fetch(FETCH_URL);
      const data = await response.json();

      dispatch({ type: ACTIONS.SET_TODOS, payload: data });
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <>
      <Layout>
        <AddTodo addTodo={handleTodoAdd} />
        <TodoList
          onTodoEdit={handleTodoEdit}
          onTodoComplete={handleTodoComplete}
          onTodoRemove={handleTodoRemove}
        />
      </Layout>
      {showEditModal && (
        <Modal>
          <EditTodoContent />
        </Modal>
      )}
    </>
  );
}

export default App;
