import { useContext, useEffect } from 'react';
import { CommentsContainer } from './styles.js';
import WriteComment from './WriteComment/index.js';
import PostComments from './PostComments/index.js';
import getComments from './WriteComment/getComments.js';
import PostContext from '../../../contexts/RepostsContext.js';

export default function Comments({ post }) {
  const { showComments, comments, setComments } = useContext(PostContext);

  useEffect(() => {
    getComments(post, setComments);
  }, [post, setComments]);

  if (!showComments) return '';

  return (
    <CommentsContainer>
      <PostComments post={post} comments={comments} />
      <WriteComment post={post} setComments={setComments} />
    </CommentsContainer>
  );
}
