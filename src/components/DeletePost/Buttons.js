import { useContext, useState } from 'react';
import ModalContext from '../../contexts/ModalContext.js';
import ConfirmButton from './ConfirmButton.js';
import { ButtonsContainer } from './styles.js';

export default function Buttons() {
  const { setIsModalOpen } = useContext(ModalContext);

  return (
    <ButtonsContainer>
      <div onClick={() => setIsModalOpen(false)}>No, go back</div>
      <ConfirmButton />
    </ButtonsContainer>
  );
}
