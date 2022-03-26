import { deletePost } from '../../services/linkr.js';
import getPostsData from '../../utils/getPostsData.js';
import { toastError } from '../toasts.js';

export default async function handleDeletePost(
  token,
  setIsModalOpen,
  setPosts
) {
  return deletePost(token)
    .then(() => {
      getPostsData(setPosts);
      setIsModalOpen(false);
    })
    .catch(() => {
      setIsModalOpen(false);
      toastError('Failed to delete the post. Please, try again');
    });
}
