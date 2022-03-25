import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/UserContext.js';
import { dislikeThePost, getPosts, likeThePost } from '../../services/linkr.js';
import { LinkSnippet } from '../LinkSnippet/index.js';
import Loader from '../Loader.js';
import { toastError } from '../toasts.js';
import { Heart, HeartRed, Post, PostContent, PostsContainer, PostSidebar } from './styles.js';

export default function Posts() {
  const [posts, setPosts] = useState();

  const { token } = useContext(UserContext);

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    getPosts()
      .then((res) => setPosts(res.data))
      .catch(() => {
        toastError(
          'An error occured while trying to fetch the posts, please refresh the page'
        );
      });
  }, []);

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
                    <HeartRed onClick={ () => dislike(post.id) } />
                  : <Heart onClick={ () => like(post.id) } />
                }
              </PostSidebar>
              <PostContent>
                <span id='name'>{post.username}</span>
                {post.comment && <span id='comment'>{post.comment}</span>}
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
