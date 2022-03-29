import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ModalContext from '../../../contexts/ModalContext.js';
import ConfirmButton from './ConfirmButton.js';
import { ButtonsContainer } from './styles.js';

export default function Buttons() {
  const { setIsModalOpen } = useContext(ModalContext);
  const { hashtag, id } = useParams();

  return (
    <ButtonsContainer>
      <div onClick={() => setIsModalOpen(false)}>No, go back</div>
      <ConfirmButton hashtagParams={hashtag} idParams={id} />
    </ButtonsContainer>
  );
}
