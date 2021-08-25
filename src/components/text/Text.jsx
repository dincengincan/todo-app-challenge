import { StyledText } from './Text.styles';

const Text = ({ textAlign, margin, tagName, fontSize, color, text, props }) => {
  return (
    <StyledText
      margin={margin}
      textAlign={textAlign}
      tagName={tagName}
      fontSize={fontSize}
      color={color}
      {...props}
    >
      {text}
    </StyledText>
  );
};

export default Text;
