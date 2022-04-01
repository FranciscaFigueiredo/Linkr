import { deletePost } from '../../../services/linkr.js';
import getPostsData from '../../../utils/getPostsData.js';
import getPostsDataById from '../../../utils/getPostsDataById.js';
import { toastError, toastSuccess } from '../../toasts.js';

export default async function handleDeletePost(
  token,
  setIsModalOpen,
  setPosts,
  postId,
  hashtagParams,
  idParams,
  setAllPosts
) {
  
  console.log(postId, idParams);
  return deletePost(token, postId)
    .then(() => {
      window.location.reload();
      // if (idParams) getPostsDataById({setAllPosts, id: idParams});
      // else getPostsData(setPosts, hashtagParams);
      // setIsModalOpen(false);
      // toastSuccess('Post deleted');
    })
    .catch(() => {
      setIsModalOpen(false);
      toastError('Failed to delete the post. Please, try again');
    });
}
