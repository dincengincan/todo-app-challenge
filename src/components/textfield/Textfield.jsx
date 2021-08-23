import { StyledInput } from './Textfield.styles';

const Textfield = ({ onChange, value }) => {
  return <StyledInput type="text" value={value} onChange={onChange} />;
};

export default Textfield;
