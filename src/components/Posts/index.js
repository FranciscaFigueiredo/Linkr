import { useContext, useEffect, useRef, useState } from 'react';
import { LinkSnippet } from '../LinkSnippet/index.js';
import Loader from '../Loader.js';
import {
  Post,
  PostContent,
  PostsContainer,
  PostSidebar,
  Hashtag,
  Options,
  Edit,
  QuantLikes,
} from './styles.js';
import ReactHashtag from '@mdnm/react-hashtag';
import { useNavigate } from 'react-router-dom';
import getPostsData from '../../utils/getPostsData.js';
import { dislikeThePost, likeThePost } from '../../services/linkr.js';
import UserContext from '../../contexts/UserContext.js';
import Like from '../Like.js';
import { DeletePost } from '../DeletePost/';
import PostsContext from '../../contexts/PostsContext.js';
import getPostsDataById from '../../utils/getPostsDataById.js';
import EditPost from '../EditPost/index.js';

export default function Posts({ refresh, id, hashtag, setRefresh }) {
  const { posts, setPosts } = useContext(PostsContext);
  const [edit, setEdit] = useState({
    status: false,
    idPost: null
  });
  const [disabled, setDisabled] = useState(false);
  const [comment, setComment] = useState('');

  const navigate = useNavigate();
  const commentRef = useRef();
  
  const { user } = useContext(UserContext);

  const { token } = useContext(UserContext);

  const [liked, setLiked] = useState(0);

  useEffect(() => {
    if (id) {
      getPostsDataById(setPosts, id);
    } else {
      getPostsData(setPosts, hashtag);
    }
    
    setLiked(2);
  }, 
  [refresh, hashtag, id, liked]);

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
  
  return posts.length > 0 ? (
    <PostsContainer>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Post key={post.id}>
              {(user.username === post.username) ? 
                <Options>
                  <Edit onClick={()=>{
                     setEdit({
                      status: !(edit.status),
                      idPost: post.id
                    });
                    setComment(post.comment);
                  }}/>
                </Options> :
                ""
              }
              <PostSidebar>
                <img src={post.userPic} alt='user pic' />
                <Like post={{...post}} likes={ [...post.likes] } user={ user } like={ like } dislike={ dislike} />
                {
                  post.likes.length === 1 ?
                    <QuantLikes> { post.likes.length } like </QuantLikes>
                    : <QuantLikes> { post.likes.length } likes </QuantLikes>
                }
              </PostSidebar>
              <PostContent>
                <span
                  id='name'
                  onClick={() => navigate(`/users/${post.userId}`)}
                >
                  {post.username}
                </span>
                {(edit.status && edit.idPost===post.id) ? 
                  <EditPost>
                    { comment }
                    { setComment }
                    { edit }
                    { setEdit }
                    { post }
                    { disabled }
                    { setDisabled }
                    { commentRef }
                    { refresh }
                    { setRefresh }
                  </EditPost> :
                post.comment && (
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
    </PostsContainer>
  ) : (
    <Loader />
  );
}
