import styled from 'styled-components';

import { BUTTON_VARIANTS } from './Button';

export const StyledButton = styled.button`
  ${({ variant }) =>
    variant === BUTTON_VARIANTS.PRIMARY
      ? 'background-color: black; color: white;'
      : 'background-color: gray; color: black;'};

  border: none;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 10px;
`;
