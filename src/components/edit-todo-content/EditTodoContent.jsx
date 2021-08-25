import { useState } from 'react';
import Button, { BUTTON_VARIANTS } from '../button/Button';
import Datefield from '../datefield/Datefield';
import Row from '../row/Row';
import Textfield from '../textfield/Textfield';
import { StyledForm } from './EditTodoContent.styles';

const EditTodoContent = ({ onSubmit, onCancel }) => {
  const [todo, setTodo] = useState();
  const [date, setDate] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ todo, date });
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Textfield
          value={todo}
          placeholder="todo"
          onChange={(e) => setTodo(e.target.value)}
        />
      </Row>

      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Datefield value={date} onChange={(e) => setDate(e.target.value)} />
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          disabled={!todo && !date}
          type="submit"
          text="Edit"
          variant={BUTTON_VARIANTS.PRIMARY}
        />
        <Button
          type="button"
          text="Cancel"
          variant={BUTTON_VARIANTS.SECONDARY}
          onClick={onCancel}
        />
      </Row>
    </StyledForm>
  );
};

export default EditTodoContent;
