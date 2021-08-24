import { StyledBackground, StyledModal } from './Modal.styles';

const Modal = ({ children }) => {
  return (
    <>
      <StyledModal>{children}</StyledModal>
      <StyledBackground />
    </>
  );
};

export default Modal;
