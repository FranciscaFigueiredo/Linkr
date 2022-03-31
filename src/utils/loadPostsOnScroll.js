import { toastError } from "../components/toasts";
import { getPostsByIdOrder, loadPosts } from "../services/linkr";
import { treatPostsData } from "./treatPostsData";

export default function loadPostsOnScroll({ posts, setPosts, token, setHasMore, id }) {
    if (id) {
        getPostsDataById({ posts, setPosts, token, id, setHasMore });
      } else {
        getPostsData({ posts, setPosts, hashtag: null, token, setHasMore });
    }
}

function getPostsData({ posts, setPosts, hashtag, token, setHasMore }) {
    loadPosts({ postsLength: posts.length, token })
      .then((res) => {
        if (res.data.length) {
          setHasMore(true)
          const treatedPosts = treatPostsData(res.data);
          setHasMore(false)
          setPosts([...posts, ...treatedPosts]);
        }
      })
      .catch(() => {
        console.error();
        toastError(
          'An error occured while trying to fetch the posts, please refresh the page'
        );
      });
}
  
function getPostsDataById({ posts, setPosts, token, id, setHasMore }) {
    getPostsByIdOrder({ postsLength: posts.length, id })
      .then((res) => {
        if (res.data.length) {
          setHasMore(true)
          const treatedPosts = treatPostsData(res.data);
          setHasMore(false)
          setPosts([...posts, ...treatedPosts]);
        }
      })
      .catch(() => {
        console.error();
        toastError(
          'An error occured while trying to fetch the posts, please refresh the page'
        );
      });
}