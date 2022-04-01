import { toastError } from "../components/toasts";
import { getPostsByIdOrder, loadPosts } from "../services/linkr";
import { treatPostsData } from "./treatPostsData";

export default function loadPostsOnScroll({ posts, setAllPosts, token, setHasMore, id, hashtag, limit, pagination, allPosts, setLimit }) {
    // if (id) {
    //   getPostsDataById({ posts, setAllPosts, token, id, setHasMore, pagination });
    // } else {
    //   getPostsData({ posts, setAllPosts, hashtag, token, setHasMore, pagination });
    // }
    if (allPosts.length > limit) {
      setLimit(limit+10)
      pagination([...allPosts], limit);
    }
}

function getPostsData({ posts, setAllPosts, hashtag, token, setHasMore }) {
    loadPosts({ postsLength: posts.length, token, hashtag })
      .then((res) => {
        if (res.data.length < posts.length) {
          setHasMore(true)
        } else {
          setHasMore(false);
        }
        if (res.data.length) {
          const treatedPosts = treatPostsData([...posts, ...res.data]);
          setAllPosts([...treatedPosts]);
        }
          
      })
      .catch(() => {
        console.error();
        toastError(
          'An error occured while trying to fetch the posts, please refresh the page'
        );
      });
}
  
function getPostsDataById({ posts, setAllPosts, id, setHasMore }) {
    getPostsByIdOrder({ postsLength: posts.length, id })
      .then((res) => {
        if (res.data.length) {
          setHasMore(true)
          const treatedPosts = treatPostsData(res.data);
          
          setAllPosts([...treatedPosts]);
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