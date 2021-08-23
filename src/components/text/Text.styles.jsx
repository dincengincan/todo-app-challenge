import styled from 'styled-components';

import { createElement } from 'react';

export const StyledText = styled(({ tagName, fontSize, children, ...props }) =>
  createElement(tagName, fontSize, props, children)
)`
  font-size: ${({ fontSize }) => `${fontSize}px`};
`;
