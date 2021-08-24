import { StyledRow } from './Row.styles';

const Row = ({ children, style }) => {
  return <StyledRow style={style}>{children}</StyledRow>;
};

export default Row;
