import { useState } from 'react';
import Button, { BUTTON_VARIANTS } from '../button/Button';
import Row from '../row/Row';
import Textfield from '../textfield/Textfield';
import { StyledForm } from './EditTodoContent.styles';

const EditTodoContent = ({ children }) => {
  const [todo, setTodo] = useState();
  const [date, setDate] = useState();

  return (
    <StyledForm>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Textfield value={todo} placeholder="todo" onChange={setTodo} />
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Textfield value={date} placeholder="date" onChange={setDate} />
      </Row>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <Button text="Edit" variant={BUTTON_VARIANTS.PRIMARY} />
      </Row>
    </StyledForm>
  );
};

export default EditTodoContent;
