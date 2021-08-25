import styled from 'styled-components';

import { createElement } from 'react';

export const StyledText = styled(
  ({ tagName, textAlign, margin, fontSize, color, children, ...props }) =>
    createElement(tagName, props, children)
)`
  font-size: ${({ fontSize }) => `${fontSize}`};
  color: ${({ color }) => `${color}`};
  margin: ${({ margin }) => `${margin}`};
  text-align: ${({ textAlign }) => `${textAlign}`};
`;
