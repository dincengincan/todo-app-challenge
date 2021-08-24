import { StyledTodo, Container } from './TodoItem.styles';

import Button, { BUTTON_VARIANTS } from '../button/Button';

const TodoItem = ({
  children,
  onTodoRemove,
  onTodoEdit,
  onTodoComplete,
  todo,
}) => {
  return (
    <Container>
      <StyledTodo
        overline={todo.completed}
        onClick={() => onTodoComplete(todo)}
      >
        {children}
      </StyledTodo>
      <Button
        onClick={() => onTodoEdit(todo)}
        text="Edit"
        variant={BUTTON_VARIANTS.SECONDARY}
      />
      <Button
        onClick={() => onTodoRemove(todo.id)}
        text="X"
        variant={BUTTON_VARIANTS.SECONDARY}
      />
    </Container>
  );
};

export default TodoItem;
