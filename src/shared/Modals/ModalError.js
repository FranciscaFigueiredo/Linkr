import Modal from 'react-modal';
import { ButtonsContainer, ModalContentContainer } from '../../components/Post/DeletePost/styles.js';
import '../../components/Post/DeletePost/modalStyle.css';

export default function ModalError({ message, isModalOpen, setIsModalOpen }) {
    Modal.setAppElement('#root');

    return (
        <Modal isOpen={isModalOpen} className='Modal' overlayClassName='Overlay'>
            <ModalContentContainer>
                <span id='ModalQuestion'>{message}</span>
                <ButtonsContainer>
                    <div onClick={() => setIsModalOpen(false)}>Ok</div>
                </ButtonsContainer>
            </ModalContentContainer>
        </Modal>
    );
}