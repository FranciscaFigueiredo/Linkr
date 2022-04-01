import { toastError } from "../components/toasts";
import { getPostsByIdOrder, loadPosts } from "../services/linkr";
import { treatPostsData } from "./treatPostsData";

export default function loadPostsOnScroll({ posts, setPosts, token, setHasMore, id, hashtag }) {
    if (id) {
        getPostsDataById({ posts, setPosts, token, id, setHasMore });
    } else {
        getPostsData({ posts, setPosts, hashtag, token, setHasMore });
    }
}

function getPostsData({ posts, setPosts, hashtag, token, setHasMore }) {
    loadPosts({ postsLength: posts.length, token, hashtag })
      .then((res) => {
        if (res.data.length) {
          setHasMore(true)
          const treatedPosts = treatPostsData(res.data);
          
          setPosts([...posts, ...treatedPosts]);
          return;
        }
        else {
          setHasMore(false)
        }
      })
      .catch(() => {
        console.error();
        toastError(
          'An error occured while trying to fetch the posts, please refresh the page'
        );
      });
}
  
function getPostsDataById({ posts, setPosts, id, setHasMore }) {
    getPostsByIdOrder({ postsLength: posts.length, id })
      .then((res) => {
        if (res.data.length) {
          setHasMore(true)
          const treatedPosts = treatPostsData(res.data);
          
          setPosts([...posts, ...treatedPosts]);
          return;
        }
        setHasMore(false)
      })
      .catch(() => {
        console.error();
        toastError(
          'An error occured while trying to fetch the posts, please refresh the page'
        );
      });
}