import { CommentsIcon, Container } from './styles.js';
import Loading from '../WriteComment/Loading.js';
import { quantityString } from './quantityString.js';
import { useContext } from 'react';
import PostContext from '../../../../contexts/RepostsContext.js';

export default function CommentsQuantity({ post }) {
  const { showComments, setShowComments, comments } = useContext(PostContext);

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
