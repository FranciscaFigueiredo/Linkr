import { deletePost } from '../../services/linkr.js';
import getPostsData from '../../utils/getPostsData.js';
import { toastError, toastSuccess } from '../toasts.js';

export default async function handleDeletePost(
  token,
  setIsModalOpen,
  setPosts,
  postId
) {
  return deletePost(token, postId)
    .then(() => {
      getPostsData(setPosts);
      setIsModalOpen(false);
      toastSuccess('Post deleted');
    })
    .catch(() => {
      setIsModalOpen(false);
      toastError('Failed to delete the post. Please, try again');
    });
}
