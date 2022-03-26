import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import ModalContext from '../../contexts/ModalContext.js';
import UserContext from '../../contexts/UserContext.js';
import { DeleteButtonContainer } from './styles.js';

export function DeletePost({ post }) {
  const {
    user: { username },
  } = useContext(UserContext);

  const { username: postUsername } = post;

  const { setIsModalOpen } = useContext(ModalContext);

  if (username === postUsername)
    return (
      <DeleteButtonContainer onClick={() => setIsModalOpen(true)}>
        <AiFillDelete />
      </DeleteButtonContainer>
    );
  return '';
}
