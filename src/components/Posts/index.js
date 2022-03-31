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

export default function Posts({ refresh, setRefresh }) {
  const { id, hashtag } = useParams();

  const { posts, setPosts } = useContext(PostsContext);
  const { token } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);

  const [hasMore, setHasMore] = useState(true);

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
  }, [refresh, hashtag, id, setPosts]);

  if (isLoading) return <Loader />;

  if (posts.length === 0)
    return <span id='noPosts'>There are no posts yet</span>;

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
