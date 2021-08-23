import { StyledButton } from './Button.styles';

export const BUTTON_VARIANTS = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
};

//TODO: Button inner text can be Text component
const Button = ({ variant, text }) => {
  return <StyledButton variant={variant}>{text}</StyledButton>;
};

export default Button;
