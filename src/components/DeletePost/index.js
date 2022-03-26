import { useContext } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import ModalContext from '../../contexts/ModalContext.js';
import PostsContext from '../../contexts/PostsContext.js';
import UserContext from '../../contexts/UserContext.js';
import { DeleteButtonContainer } from './styles.js';

export function DeletePost({ post }) {
  const {
    user: { username },
  } = useContext(UserContext);
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
