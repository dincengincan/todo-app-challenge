import { useState, useEffect } from 'react';

import { Container, StyledForm } from './AddTodo.styles';
import Textfield from '../textfield/Textfield';
import Button from '../button/Button';
import { BUTTON_VARIANTS } from '../button/Button';
import Checkbox from '../checkbox/Checkbox';
import { FETCH_URL } from '../../constants/general';
import Row from '../row/Row';

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

  const handleReset = async () => {
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
      <Row>
        <form onSubmit={handleFormSubmit}>
          <Textfield
            placeholder="What needs to be done?"
            value={todoInput}
            onChange={handleTodoInput}
          />
          <Button type="submit" text="Add" variant={BUTTON_VARIANTS.PRIMARY} />
          <Button
            onClick={() => handleReset}
            text="Remove"
            variant={BUTTON_VARIANTS.PRIMARY}
          />
        </form>
      </Row>
      <Row>
        <Checkbox
          label="Set deadline"
          checked={deadline}
          onChange={handleDeadlineChange}
        />
      </Row>
    </>
  );
};

export default AddTodo;
