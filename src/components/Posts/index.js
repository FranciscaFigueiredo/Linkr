import { useContext, useEffect, useState } from 'react';
import { LinkSnippet } from '../LinkSnippet/index.js';
import Loader from '../Loader.js';
import {
  Post,
  PostContent,
  PostsContainer,
  PostSidebar,
  Hashtag,
} from './styles.js';
import ReactHashtag from '@mdnm/react-hashtag';
import ReactTooltip from 'react-tooltip';
import { useNavigate } from 'react-router-dom';
import getPostsData from '../../utils/getPostsData.js';
import { dislikeThePost, likeThePost } from '../../services/linkr.js';
import UserContext from '../../contexts/UserContext.js';
import Like from '../Like.js';

export default function Posts({ refresh, id, setName, hashtag}) {
  const { user } = useContext(UserContext)
  const [posts, setPosts] = useState();
  const navigate = useNavigate();

  const { token } = useContext(UserContext);

  const [liked, setLiked] = useState(0);

    useEffect(() => {
      setLiked(0);
      getPostsData(setPosts, hashtag);

    }, [refresh, hashtag, liked]);
    

    function like(id) {
      likeThePost({ id, token })
        .then((res) => setLiked(1))
        .catch((err) => console.error());
    }
  
    function dislike(id) {
      dislikeThePost({ id, token })
        .then((res) => setLiked(0))
        .catch((err) => console.error());
    }

  if(posts && id){
    setName(posts[0].username)
  }

  return posts ? (
    <PostsContainer>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Post key={post.id}>
              <PostSidebar>
                <img src={post.userPic} alt='user pic' />
                <Like post={ post } user={ user } like={ like } dislike={ dislike} />
              </PostSidebar>
              <PostContent>
                <span id='name'
                  onClick={() =>
                    navigate(`/users/${post.userId}`)
                  }  
                >
                    {post.username}
                </span>
                {post.comment && (
                  <span id='comment'>
                    <ReactHashtag
                      renderHashtag={(hashtagValue) => (
                        <Hashtag
                          onClick={() =>
                            navigate(`/hashtag/${hashtagValue.substr(1)}`)
                          }
                        >
                          {hashtagValue}
                        </Hashtag>
                      )}
                    >
                      {post.comment}
                    </ReactHashtag>
                  </span>
                )}
                <a href={post.url} target='_blank' rel='noreferrer'>
                  <LinkSnippet post={post} />
                </a>
              </PostContent>
            </Post>
          );
        })
      ) : (
        <span id='noPosts'>There are no posts yet</span>
      )}
      <ReactTooltip />
    </PostsContainer>
  ) : (
    <Loader />
  );
}