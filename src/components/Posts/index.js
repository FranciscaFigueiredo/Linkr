import { useContext, useEffect, useState } from 'react';
import Loader from '../Loader.js';
import { useParams } from 'react-router-dom';
import getPostsData from '../../utils/getPostsData.js';
import PostsContext from '../../contexts/PostsContext.js';
import getPostsDataById from '../../utils/getPostsDataById.js';
import { PostsContainer } from './styles.js';
import Post from '../Post/index.js';
import { getFollows } from '../../services/linkr.js';

export default function Posts({ refresh, setRefresh }) {
  const { id, hashtag } = useParams();

  const { posts, setPosts } = useContext(PostsContext);

  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.parse(sessionStorage.getItem('user'))

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      getPostsDataById(setPosts, id).finally(() => {
        setIsLoading(false);
      });
    } else {
      getPostsData(setPosts, hashtag).finally(() => {
        setIsLoading(false);
      });
    }
    const promise = getFollows(user.token)
    promise.then(res => localStorage.setItem("follows", JSON.stringify(res.data)))
    promise.catch(res => console.log(res.response))
  }, [refresh, hashtag, id, setPosts]);

  if (isLoading) return <Loader />;

  if (posts.length === 0)
    return <span id='noPosts'>There are no posts yet</span>;

  return (
    <PostsContainer>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            post={post}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        );
      })}
    </PostsContainer>
  );
}
