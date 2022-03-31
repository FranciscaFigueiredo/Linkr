import { CommentsIcon, Container } from './styles.js';
import Loading from '../WriteComment/Loading.js';
import { quantityString } from './quantityString.js';

export default function CommentsQuantity({ commentsProps, post }) {
  const { showComments, setShowComments, comments } = commentsProps;

  if (comments === null) return <Loading />;

  const quantity = quantityString(comments);

  return (
    <Container
      onClick={() => {
        setShowComments(!showComments);
      }}
    >
      <CommentsIcon />
      <span id='commentsQuantity'>{quantity}</span>
    </Container>
  );
}
