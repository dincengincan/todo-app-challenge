import { useState, useEffect } from 'react';

import { Container, StyledForm } from './AddTodo.styles';
import Textfield from '../textfield/Textfield';
import Button from '../button/Button';
import { BUTTON_VARIANTS } from '../button/Button';
import Checkbox from '../checkbox/Checkbox';
import { FETCH_URL } from '../../constants/general';

const AddTodo = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');
  const [deadline, setDeadline] = useState(false);

  const handleTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleDeadlineChange = (hasDeadline) => {
    setDeadline(hasDeadline);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    addTodo(todoInput);
  };

  const handleRemoveClick = async () => {
    await fetch(FETCH_URL, {
      method: 'DELETE',
      body: JSON.stringify({
        label: todoInput,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  return (
    <>
      <StyledForm onSubmit={handleFormSubmit}>
        <Textfield value={todoInput} onChange={handleTodoInput} />
        <Button type="submit" text="Add" variant={BUTTON_VARIANTS.PRIMARY} />
        <Button
          onClick={handleRemoveClick}
          text="Remove"
          variant={BUTTON_VARIANTS.PRIMARY}
        />
      </StyledForm>
      <Checkbox
        label="Set deadline"
        checked={deadline}
        onChange={handleDeadlineChange}
      />
    </>
  );
};

export default AddTodo;
