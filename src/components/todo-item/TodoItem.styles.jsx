import styled from 'styled-components';

export const StyledTodo = styled.div`
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 75%;
  background-color: white;

  &:hover {
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.3);
  }

  ${({ overline }) =>
    overline && 'text-decoration: line-through; opacity: 0.35;'}
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
