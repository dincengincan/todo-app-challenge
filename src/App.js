import { useDispatch } from 'react-redux';

import AddTodo from './components/add-todo/AddTodo';
import Layout from './components/layout/Layout';

import TodoList from './components/todo-list/TodoList';

import './styles.css';
import { useCallback, useEffect, useState } from 'react';
import { FETCH_URL } from './constants/general';
import { ACTIONS } from './store';
import Modal from './components/modal/Modal';
import EditTodoContent from './components/edit-todo-content/EditTodoContent';
import Text from './components/text/Text';

function App() {
  const dispatch = useDispatch();
  const [selectedTodo, setSelectedTodo] = useState();

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

  const handleTodoAdd = async (todoInput, deadline) => {
    const settings = {
      method: 'POST',
      body: JSON.stringify({
        label: todoInput,
        checked: false,
        deadline,
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

  const handleModalShow = (receivedTodo) => {
    console.log(receivedTodo);
    setSelectedTodo(receivedTodo);
  };

  const handleTodoEdit = async ({ todo, date }) => {
    console.log();
    const settings = {
      method: 'PUT',
      body: JSON.stringify({
        label: todo,
        deadline: date,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const fetchResponse = await fetch(
        `${FETCH_URL}/${selectedTodo.id}`,
        settings
      );
      const data = await fetchResponse.json();
      if (data) {
        fetchTodos();
        setSelectedTodo(null);
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

  const handleModalClose = () => setSelectedTodo(null);

  return (
    <>
      <Layout>
        <Text
          margin="40px 0"
          textAlign="center"
          color="#cecece"
          fontSize="70px"
          text="TODO"
          tagName="p"
        />
        <AddTodo addTodo={handleTodoAdd} />
        <TodoList
          onTodoEdit={handleModalShow}
          onTodoComplete={handleTodoComplete}
          onTodoRemove={handleTodoRemove}
        />
      </Layout>
      {selectedTodo?.id && (
        <Modal>
          <EditTodoContent
            onCancel={handleModalClose}
            onSubmit={handleTodoEdit}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
