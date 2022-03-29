import { useContext } from 'react';
import Modal from 'react-modal';
import ModalContext from '../../../contexts/ModalContext.js';
import ModalContent from './ModalContent.js';
import './modalStyle.css';

export default function DeletePostModal() {
  const { isModalOpen } = useContext(ModalContext);

  Modal.setAppElement('#root');

  return (
    <Modal isOpen={isModalOpen} className='Modal' overlayClassName='Overlay'>
      <ModalContent />
    </Modal>
  );
}
