import { toastError } from '../components/toasts.js';
import { getPosts } from '../services/linkr.js';
import { treatPostsData } from './treatPostsData.js';

export default function getPostsData(setPosts) {
  getPosts()
    .then((res) => {
      const posts = treatPostsData(res.data);
      setPosts(posts);
    })
    .catch((error) => {
      console.error();
      toastError(
        'An error occured while trying to fetch the posts, please refresh the page'
      );
    });
}
