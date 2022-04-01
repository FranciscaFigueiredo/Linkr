import { useContext, useEffect, useState } from 'react';
import Loader from '../Loader.js';
import { useParams } from 'react-router-dom';
import getPostsData from '../../utils/getPostsData.js';
import PostsContext from '../../contexts/PostsContext.js';
import getPostsDataById from '../../utils/getPostsDataById.js';
import { InfiniteScrollStyled, PostsContainer } from './styles.js';
import Post from '../Post/index.js';
import { getFollows } from '../../services/linkr.js';

import UserContext from '../../contexts/UserContext.js';
import loadPostsOnScroll from '../../utils/loadPostsOnScroll.js';

export default function Posts({ refresh, setRefresh }) {
  const { id, hashtag } = useParams();

  const { posts, setPosts, allPosts, setAllPosts, setFunc } = useContext(PostsContext);
  const { token } = useContext(UserContext);


  const [limit, setLimit] = useState(10);
  

  function pagination(allPosts) {
    if(allPosts){
      console.log({ allPosts });
      const teste = []
      for (let i = 0; i < limit && i < allPosts?.length; i++) {
        teste.push(allPosts[i])
      }
      console.log('pagination');
      console.log(teste);
      setPosts([...teste])
      //window.scrollTo(0, 1000);
      setLimit(limit + 10)

      if (limit > allPosts.length) {
        setHasMore(false)
      }
    }
  }
  
  console.log({posts});
  console.log({limit});
 
  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.parse(sessionStorage.getItem('user'));
  const [hasMore, setHasMore] = useState(true);
  const [follows, setFollows] = useState([]);
  
  useEffect(() => {
    setIsLoading(true);
    if (id) {
      getPostsDataById({setAllPosts,pagination, id}).finally(() => {
        setIsLoading(false);
      });
    } else {

      getPostsData({setAllPosts, pagination, token: user.token, hashtag}).finally(() => {

        setIsLoading(false);
      });
    }
    const promise = getFollows(user.token)
    promise.then(res => {
      localStorage.setItem("follows", JSON.stringify(res.data))
      setFollows(res.data);
    })
    promise.catch(res => console.log(res.response))

    setFunc(pagination)
    

  }, [refresh, hashtag, id, setPosts]);

  if (isLoading) return <Loader />;

  if ((id || hashtag) && posts.length === 0){
    return <span id='noPosts'>There are no posts yet</span>;
  } else if (posts.length === 0){
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
        loadMore={() => pagination([...allPosts])}
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
