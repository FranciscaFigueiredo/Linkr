import { toastError } from '../components/toasts.js';
import { getPostsById } from '../services/linkr.js';
import { treatPostsData } from './treatPostsData.js';

export default function getPostsDataById({setAllPosts, id, pagination}) {
  return getPostsById(id)
    .then((res) => {
      const posts = treatPostsData(res.data);
      setAllPosts([...posts]);
      pagination([...posts])
    })
    .catch((error) => {
      console.error();
      toastError(
        'An error occured while trying to fetch the posts, please refresh the page'
      );
    });
}
