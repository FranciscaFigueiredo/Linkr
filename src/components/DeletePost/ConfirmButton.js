import { useContext, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import ModalContext from '../../contexts/ModalContext.js';
import PostsContext from '../../contexts/PostsContext.js';
import UserContext from '../../contexts/UserContext.js';
import handleDeletePost from './handleDeletePost.js';

export default function ConfirmButton() {
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useContext(UserContext);
  const { setIsModalOpen } = useContext(ModalContext);
  const { setPosts, postId } = useContext(PostsContext);

  if (isLoading) return <ThreeDots color='white' width={40} height={40} />;
  else
    return (
      <div
        onClick={() => {
          setIsLoading(true);
          handleDeletePost(token, setIsModalOpen, setPosts, postId);
        }}
      >
        Yes, delete it
      </div>
    );
}
