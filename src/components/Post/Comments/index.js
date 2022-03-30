import { CommentsContainer } from './styles.js';
import WriteComment from './WriteComment/index.js';

export default function Comments({ post }) {
  return (
    <CommentsContainer>
      <WriteComment post={post} />
    </CommentsContainer>
  );
}
