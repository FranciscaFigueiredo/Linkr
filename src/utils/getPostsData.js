import { toastError } from '../components/toasts.js';
import { getPosts } from '../services/linkr.js';
import { treatPostsData } from './treatPostsData.js';

export default function getPostsData(setPosts, token, hashtag) {
  return getPosts(token, hashtag)
    .then((res) => {
      const posts = treatPostsData(res.data);
      setPosts([...posts]);
    })
    .catch(() => {
      console.error();
      toastError(
        'An error occured while trying to fetch the posts, please refresh the page'
      );
    });
}
