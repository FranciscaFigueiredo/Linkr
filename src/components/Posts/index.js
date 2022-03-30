import { useContext, useEffect, useState } from 'react';
import Loader from '../Loader.js';
import { useParams } from 'react-router-dom';
import getPostsData from '../../utils/getPostsData.js';
import PostsContext from '../../contexts/PostsContext.js';
import getPostsDataById from '../../utils/getPostsDataById.js';
import { InfiniteScrollStyled, PostsContainer } from './styles.js';
import Post from '../Post/index.js';

import InfiniteScroll from 'react-infinite-scroller';
import { loadPosts } from '../../services/linkr.js';
import UserContext from '../../contexts/UserContext.js';
import { treatPostsData } from '../../utils/treatPostsData.js';

export default function Posts({ refresh, setRefresh }) {
  const { id, hashtag } = useParams();

  const { posts, setPosts } = useContext(PostsContext);
  const { token } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (id) {
      getPostsDataById(setPosts, id);
    } else {
      console.log('log');
      getPostsData(setPosts, hashtag);
    }
    setIsLoading(false);
  }, [refresh, hashtag, id, setPosts]);

  function loadPostsOnScroll() {
    loadPosts({ postsLength: posts.length - 1, token })
      .then((res) => {
        const treatedPosts = treatPostsData(res.data);
        setPosts([...posts, ...treatedPosts]);
      })
  }
  
  if (isLoading) return <Loader />;

  if (posts.length === 0)
    return <span id='noPosts'>There are no posts yet</span>;

  return (
    <PostsContainer>
      <InfiniteScrollStyled
        pageStart={0}
        loadMore={loadPostsOnScroll} 
        useWindow={false}
        hasMore={true || false}
        loader={<div className="loader" key={0}> {console.log('entrou')}Loading ...</div>}
        endMessage={<h1>Terminou </h1>}
        useWindow={false}
      >
        {posts.map((post, index) => <Post key={ index } post={post} refresh={refresh} setRefresh={setRefresh} />)}
      </InfiniteScrollStyled>
    </PostsContainer>
  );
}
