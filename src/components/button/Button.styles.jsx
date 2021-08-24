import styled from 'styled-components';
import { BUTTON_COLORS } from '../../constants/colors';

import { BUTTON_VARIANTS } from './Button';

export const StyledButton = styled.button`
  ${({ variant }) =>
    variant === BUTTON_VARIANTS.PRIMARY
      ? `background-color: ${BUTTON_COLORS.PRIMARY}; color: white;`
      : `background-color: ${BUTTON_COLORS.SECONDARY}; color: white;`}

  border: none;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
`;
