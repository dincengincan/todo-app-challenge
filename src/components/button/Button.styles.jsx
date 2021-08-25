import styled from 'styled-components';
import { BUTTON_COLORS } from '../../constants/colors';

import { BUTTON_VARIANTS } from './Button';

export const StyledButton = styled.button`
  color: white;
  ${({ variant }) => {
    if (variant === BUTTON_VARIANTS.PRIMARY) {
      return `background-color: ${BUTTON_COLORS.PRIMARY};`;
    }
    if (variant === BUTTON_VARIANTS.SECONDARY) {
      return `background-color: ${BUTTON_COLORS.SECONDARY};`;
    }
  }}

  ${({ disabled }) =>
    disabled &&
    `background-color: ${BUTTON_COLORS.DISABLED}; pointer-events: none;`}

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
