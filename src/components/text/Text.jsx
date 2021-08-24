import { StyledText } from './Text.styles';

const Text = ({ tagName, fontSize, color, text }) => {
  return (
    <StyledText tagName={tagName} fontSize={fontSize} color={color}>
      {text}
    </StyledText>
  );
};

export default Text;
