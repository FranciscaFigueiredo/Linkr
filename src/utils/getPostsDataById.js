import { toastError } from '../components/toasts.js';
import { getPostsById } from '../services/linkr.js';
import { treatPostsData } from './treatPostsData.js';

export default function getPostsDataById(setPosts, id) {
    getPostsById(id)
        .then((res) => {
            const posts = treatPostsData(res.data);
            setPosts(posts);
        })
        .catch((error) => {
            console.log(error);
            toastError(
                'An error occured while trying to fetch the posts, please refresh the page'
            );
        });
}
