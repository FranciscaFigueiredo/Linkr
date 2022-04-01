import Comment from './Comment.js';
import { CommentsContainer } from './styles.js';

export default function PostComments({ post, comments }) {
  if (comments.length === 0) return '';

  return (
    <CommentsContainer>
      {comments.map((comment) => {
        return <Comment post={post} comment={comment} />;
      })}
    </CommentsContainer>
  );
}
