import { useContext } from 'react';
import Modal from 'react-modal';
import ModalContext from '../../contexts/ModalContext.js';
import Buttons from '../../components/DeletePost/Buttons';
import { ModalContentContainer } from '../../components/DeletePost/styles.js';
import '../../components/DeletePost/modalStyle.css';

export default function ModalError({ message, setModal }) {
    const { isModalOpen } = useContext(ModalContext);

    Modal.setAppElement('#root');

    return (
        <Modal isOpen={isModalOpen} className='Modal' overlayClassName='Overlay'>
            <ModalContentContainer>
                <span id='ModalQuestion'>{message}</span>
                <Buttons />
            </ModalContentContainer>
        </Modal>
    );
}