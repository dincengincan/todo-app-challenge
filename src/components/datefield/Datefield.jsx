import { StyledDatefield } from './Datefield.styles';

const Datefield = ({ style, value, onChange }) => {
  return (
    <StyledDatefield
      style={style}
      value={value}
      type="date"
      onChange={onChange}
    />
  );
};

export default Datefield;
