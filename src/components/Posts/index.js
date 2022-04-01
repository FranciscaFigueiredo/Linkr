import { useContext, useEffect, useState } from 'react';
import Loader from '../Loader.js';
import { useParams } from 'react-router-dom';
import getPostsData from '../../utils/getPostsData.js';
import PostsContext from '../../contexts/PostsContext.js';
import getPostsDataById from '../../utils/getPostsDataById.js';
import { InfiniteScrollStyled, PostsContainer } from './styles.js';
import Post from '../Post/index.js';

import UserContext from '../../contexts/UserContext.js';
import loadPostsOnScroll from '../../utils/loadPostsOnScroll.js';
import { getFollows } from '../../services/linkr.js';

export default function Posts({ refresh, setRefresh }) {
  const { id, hashtag } = useParams();

  const { posts, setPosts } = useContext(PostsContext);
  const { token } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.parse(sessionStorage.getItem('user'));
  const [hasMore, setHasMore] = useState(true);
  const [follows, setFollows] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    if (id) {
      getPostsDataById(setPosts, id).finally(() => {
        setIsLoading(false);
      });
    } else {

      getPostsData(setPosts, user.token, hashtag).finally(() => {

        setIsLoading(false);
      });
    }
    getFollows(user.token)
    .then((ans)=>{
      setFollows(ans.data);
    })
  }, [refresh, hashtag, id, setPosts]);

  if (isLoading) return <Loader />;

  if (posts.length === 0){
    if(follows.length > 0){
      return <span id='noPosts'>No posts found from your friends</span>; 
    } else {
      return <span id='noPosts'>You don't follow anyone yet. Search for new friends!</span>; 
    }
  }

  return (
    <PostsContainer>
      <InfiniteScrollStyled
        dataLength={posts.length}
        pageStart={0}
        loadMore={() =>
          loadPostsOnScroll({ posts, setPosts, token, setHasMore, id })
        }
        useWindow={true}
        hasMore={hasMore}
        loader={
          <div className='loader' key={325251}>
            {' '}
            {hasMore ? <Loader /> : ''}
          </div>
        }
      >
        {posts.map((post, index) => (
          <Post
            key={index}
            post={post}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        ))}
      </InfiniteScrollStyled>
    </PostsContainer>
  );
}
