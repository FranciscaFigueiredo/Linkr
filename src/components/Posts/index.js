import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import { getPosts } from '../../services/linkr.js';
import { LinkSnippet } from '../LinkSnippet/index.js';
import Loader from '../Loader.js';
import { toastError } from '../toasts.js';
import { Post, PostContent, PostsContainer, PostSidebar, Hashtag } from './styles.js';
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from 'react-router-dom';

export default function Posts({refresh, hashtag}) {
  const [posts, setPosts] = useState();
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    getPosts(token || JSON.parse(sessionStorage.getItem('user')).token, hashtag)
      .then((res) => setPosts(res.data))
      .catch(() => {
        toastError(
          'An error occured while trying to fetch the posts, please refresh the page'
        );
      });
  }, [refresh]);

  return posts ? (
    <PostsContainer>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Post key={post.id}>
              <PostSidebar>
                <img src={post.userPic} alt='user pic' />
              </PostSidebar>
              <PostContent>
                <span id='name'>{post.username}</span>
                {post.comment && <span id='comment'><ReactHashtag
                  renderHashtag={(hashtagValue) => <Hashtag onClick={() => navigate(`/hashtag/${hashtagValue.substr(1)}`)}>
                    {hashtagValue}</Hashtag>}
                >{post.comment}</ReactHashtag></span>}
                <a href={post.url} target='_blank' rel='noreferrer'>
                  <LinkSnippet>
                    {post.linkTitle}
                    {post.linkDescription}
                    {post.linkImage}
                    {post.url}
                  </LinkSnippet>
                </a>
              </PostContent>
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
