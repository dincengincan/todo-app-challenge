import { useSelector } from 'react-redux';
import Row from '../row/Row';
import Text from '../text/Text';
import TodoItem from '../todo-item/TodoItem';

const TodoList = ({ onTodoEdit, onTodoComplete, onTodoRemove }) => {
  const todos = useSelector((state) => state.todos);

  return (
    <Row
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {todos?.map((todo) => (
        <TodoItem
          onTodoEdit={onTodoEdit}
          onTodoComplete={onTodoComplete}
          onTodoRemove={onTodoRemove}
          todo={todo}
          key={todo.id}
        >
          <Text tagName="p" text={todo.label} />
          <Text tagName="label" text={todo.deadline} />
        </TodoItem>
      ))}
    </Row>
  );
};

export default TodoList;
