import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext.js';
import { dislikeThePost, likeThePost } from '../../services/linkr.js';
import { LinkSnippet } from '../LinkSnippet/index.js';
import Loader from '../Loader.js';
import { toastError } from '../toasts.js';
import {
  Heart,
  HeartRed,
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
import treatLikes from '../../utils/treatLikes.js';

export default function Posts({ refresh }) {
  const [posts, setPosts] = useState();
  const navigate = useNavigate();

  const { token } = useContext(UserContext);

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    getPostsData(setPosts);
  }, [refresh]);

  function like(id) {
    likeThePost({ id, token })
      .then((res) => setLiked(true))
      .catch((err) => console.error());
  }

  function dislike(id) {
    dislikeThePost({ id, token })
      .then((res) => setLiked(false))
      .catch((err) => console.error());
  }

  return posts ? (
    <PostsContainer>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Post key={post.id}>
              <PostSidebar>
                <img src={post.userPic} alt='user pic' />
                {
                  liked ?
                    <HeartRed onClick={ () => dislike(post.id) } data-tip={treatLikes(post)} />
                  : <Heart onClick={ () => like(post.id) } data-tip={treatLikes(post)} />
                }
              </PostSidebar>
              <PostContent>
                <span id='name'>{post.username}</span>
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
