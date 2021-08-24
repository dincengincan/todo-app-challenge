import { StyledInput } from './Textfield.styles';

const Textfield = ({ onChange, value, placeholder }) => {
  return (
    <StyledInput
      placeholder={placeholder}
      type="text"
      value={value}
      onChange={onChange}
    />
  );
};

export default Textfield;
