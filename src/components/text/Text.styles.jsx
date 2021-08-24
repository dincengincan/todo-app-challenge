import styled from 'styled-components';

import { createElement } from 'react';

export const StyledText = styled(
  ({ tagName, color, fontSize, children, ...props }) =>
    createElement(tagName, [props], [children])
)`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => `${color}`};
`;
