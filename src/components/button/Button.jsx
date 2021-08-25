import { StyledButton } from './Button.styles';

export const BUTTON_VARIANTS = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  FILTER: 'FILTER',
};

//TODO: Button inner text can be Text component
const Button = ({
  variant,
  text,
  type,
  onClick,
  style,
  disabled,
  isSelected,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      style={style}
      onClick={onClick}
      type={type}
      variant={variant}
      isSelected={isSelected}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
