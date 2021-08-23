import { useState } from 'react';

import { Container } from './AddTodo.styles';
import Textfield from '../textfield/Textfield';
import Button from '../button/Button';
import { BUTTON_VARIANTS } from '../button/Button';

const AddTodo = () => {
  const [todoInput, setTodoInput] = useState('');

  const handleTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <Container>
      <Textfield value={todoInput} onChange={handleTodoInput} />
      <Button text="Add" variant={BUTTON_VARIANTS.PRIMARY} />
      <Button text="Remove" variant={BUTTON_VARIANTS.SECONDARY} />
    </Container>
  );
};

export default AddTodo;
