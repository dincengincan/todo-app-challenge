import styled from 'styled-components';

export const StyledBackground = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 25%;
  left: 35%;
  z-index: 999;
  background: #e2e2e2fd;
  height: auto;
  width: 30%;
  margin: 0px auto;
  padding: 30px 0;
`;
