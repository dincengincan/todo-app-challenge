import { StyledDatefield } from './Datefield.styles';

const Datefield = ({ value, onChange }) => {
  return <StyledDatefield value={value} type="date" onChange={onChange} />;
};

export default Datefield;
