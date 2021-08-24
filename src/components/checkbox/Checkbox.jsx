import { StyledCheckbox } from './Checkbox.styles';

const Checkbox = ({ checked, onChange, label }) => {
  return (
    <label>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {label}
    </label>
  );
};

export default Checkbox;
