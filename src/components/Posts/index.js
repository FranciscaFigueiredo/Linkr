import { useContext, useEffect } from 'react';
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
import treatLikes from '../../utils/treatLikes.js';
import { DeletePost } from '../DeletePost/';
import PostsContext from '../../contexts/PostsContext.js';
import getPostsDataById from '../../utils/getPostsDataById.js';

export default function Posts({ refresh, id, setName, hashtag }) {
  const { posts, setPosts } = useContext(PostsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getPostsDataById(setPosts, id);
    } else {
      getPostsData(setPosts, hashtag);
    }
  }, [refresh, hashtag]);

  if (posts && id) {
    setName(posts[0].username);
  }

  return posts ? (
    <PostsContainer>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Post key={post.id}>
              <PostSidebar>
                <img src={post.userPic} alt='user pic' />
                <img src={post.userPic} alt='' data-tip={treatLikes(post)} />
              </PostSidebar>
              <PostContent>
                <span
                  id='name'
                  onClick={() => navigate(`/users/${post.userId}`)}
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
              <DeletePost post={post} />
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
