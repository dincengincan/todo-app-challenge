import styled from 'styled-components';
import { BUTTON_COLORS } from '../../constants/colors';

import { BUTTON_VARIANTS } from './Button';

export const StyledButton = styled.button`
  color: white;
  outline: none;
  ${({ variant, isSelected }) => {
    if (variant === BUTTON_VARIANTS.PRIMARY) {
      return `background-color: ${BUTTON_COLORS.PRIMARY};`;
    }
    if (variant === BUTTON_VARIANTS.SECONDARY) {
      return `background-color: ${BUTTON_COLORS.SECONDARY};`;
    }
    if (variant === BUTTON_VARIANTS.FILTER) {
      if (isSelected)
        return `color: grey; border: solid 1px #d6d6d6; border-radius: 40px; background-color: ${BUTTON_COLORS.FILTER};`;
      else {
        return `opacity:0.65; border: solid 1px #d6d6d6; border-radius: 40px; background-color: ${BUTTON_COLORS.FILTER};`;
      }
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
