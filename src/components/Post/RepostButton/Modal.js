import Modal from 'react-modal';
import { ModalQuestionContainer } from './style';
import { deleteRepost, repost } from "../../../services/linkr"
import { useContext } from 'react';
import RepostsContext from '../../../contexts/RepostsContext';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'transparent',
    },
};

Modal.setAppElement('#root');

export default function RepostModal({post}) {
    const { myRepost, setMyRepost, modal, setModal } = useContext(RepostsContext)
    const user = JSON.parse(sessionStorage.getItem('user'))

    const question = myRepost ? 'Do you want to undo the re-post ?' : 'Do you want to re-post this link ?'

    function handleClick() {
        if (myRepost) {
                deleteRepost(user.token, post.id).then(() => setMyRepost(false)).catch(err => { console.log(err.response) })
        } else {
                repost(user.token, post.id).then(() => setMyRepost(true)).catch(err => { console.log(err.response) })
        }
        setModal(false)
    }

    function closeModal(){
        setModal(false)
    }

    return(
        <Modal
            isOpen={modal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Repost Modal"
            shouldCloseOnOverlayClick={true}
        >
            <ModalQuestionContainer>
                <div className="span">{question}</div>

                <div className="buttons">
                    <button className='no'
                        onClick={closeModal}
                    >No, cancel</button>

                    <button className='yes'
                    onClick={handleClick}
                    >Yes, {myRepost ? 'undo' : 'share'}!</button>
                </div>
            </ModalQuestionContainer>
        </Modal>
    )
}