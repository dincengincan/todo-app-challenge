import { StyledTodo, Container } from './TodoItem.styles';

import Button, { BUTTON_VARIANTS } from '../button/Button';

const TodoItem = ({ children, onTodoRemove, onTodoClick }) => {
  return (
    <Container>
      <StyledTodo onClick={onTodoClick}>{children}</StyledTodo>
      <Button
        onClick={onTodoRemove}
        text="X"
        variant={BUTTON_VARIANTS.SECONDARY}
      />
    </Container>
  );
};

export default TodoItem;
