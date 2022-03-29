import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import ModalContext from '../../../contexts/ModalContext.js';
import PostsContext from '../../../contexts/PostsContext.js';
import { DeleteButtonContainer } from './styles.js';

export function DeletePostButton({ post }) {
  const username = JSON.parse(sessionStorage.getItem('user')).username;
  const { setIsModalOpen } = useContext(ModalContext);
  const { setPostId } = useContext(PostsContext);

  const { username: postUsername, id } = post;

  if (username === postUsername)
    return (
      <DeleteButtonContainer
        onClick={() => {
          setIsModalOpen(true);
          setPostId(id);
        }}
      >
        <AiFillDelete />
      </DeleteButtonContainer>
    );
  return '';
}
