import { StyledButton } from './Button.styles';

export const BUTTON_VARIANTS = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
  FILTER: 'FILTER',
};

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
