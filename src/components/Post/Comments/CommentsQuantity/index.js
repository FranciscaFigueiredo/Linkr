import { useContext } from 'react';
import PostsContext from '../../../../contexts/PostsContext.js';
import { Container } from './styles.js';
import { AiOutlineComment } from 'react-icons/ai';

export default function CommentsQuantity({ commentsProps }) {
  const { showComments, setShowComments } = useContext(PostsContext);
  return (
    <Container>
      <AiOutlineComment />
    </Container>
  );
}
