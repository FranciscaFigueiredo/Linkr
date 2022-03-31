import Comment from './Comment.js';
import { CommentsContainer } from './styles.js';

export default function PostComments({ comments }) {
  console.log({ comments });

  if (comments.length === 0) return '';

  return (
    <CommentsContainer>
      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}
    </CommentsContainer>
  );
}
