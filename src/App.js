import AddTodo from './components/add-todo/AddTodo';
import Layout from './components/layout/Layout';
import TodoItem from './components/todo-item/TodoItem';
import TodoList from './components/todo-list/TodoList';
import Text from './components/text/Text';

import './styles.css';
import { useCallback, useEffect, useState } from 'react';
import { FETCH_URL } from './constants/general';

function App() {
  const [todos, setTodos] = useState();

  const addTodo = async (todoInput) => {
    const settings = {
      method: 'POST',
      body: JSON.stringify({
        label: todoInput,
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

  const fetchTodos = useCallback(async () => {
    try {
      const response = await fetch(FETCH_URL);
      const data = await response.json();

      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  return (
    <Layout>
      <AddTodo addTodo={addTodo} />
      <TodoList>
        {todos?.map((todo) => (
          <TodoItem>
            <Text color="red" tagName="p" text={todo.label} />
            <Text tagName="label" text={todo.deadline} />
          </TodoItem>
        ))}
      </TodoList>
    </Layout>
  );
}

export default App;
