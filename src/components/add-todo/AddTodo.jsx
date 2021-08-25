import { useState } from 'react';

import Textfield from '../textfield/Textfield';
import Button from '../button/Button';
import { BUTTON_VARIANTS } from '../button/Button';
import Checkbox from '../checkbox/Checkbox';
import Row from '../row/Row';
import Datefield from '../datefield/Datefield';
import FilterButtons from '../filter-buttons/FilterButtons';

const AddTodo = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState('');
  const [deadline, setDeadline] = useState('');
  const [showDeadline, setShowDeadline] = useState(false);

  const handleTodoInput = (e) => {
    setTodoInput(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setTodoInput('');
    addTodo(todoInput, deadline);
  };

  return (
    <Row style={{ display: 'flex', flexDirection: 'column' }}>
      <Row>
        <FilterButtons />
      </Row>
      <Row>
        <form onSubmit={handleFormSubmit}>
          <Textfield
            placeholder="What needs to be done?"
            value={todoInput}
            onChange={handleTodoInput}
          />
          <Button
            disabled={!todoInput}
            type="submit"
            text="Add"
            variant={BUTTON_VARIANTS.PRIMARY}
          />
        </form>
      </Row>

      <Row style={{ display: 'flex', alignItems: 'center', height: '20px' }}>
        <Checkbox
          label="Set Deadline"
          checked={showDeadline}
          onChange={setShowDeadline}
        />
        {showDeadline && (
          <Datefield
            style={{ marginLeft: '10px' }}
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
        )}
      </Row>
    </Row>
  );
};

export default AddTodo;
