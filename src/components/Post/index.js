import { LinkSnippet } from '../LinkSnippet/index.js';
import { Container, PostContainer, PostContent } from './styles.js';
import { DeletePostButton } from './DeletePost/index.js';
import PostSidebar from './PostSidebar.js';
import PostUsername from './PostUsername.js';
import PostComment from './PostComment.js';
import Comments from './Comments/index.js';

export default function Post({ post, refresh, setRefresh }) {
  return (
    <Container>
      <PostContainer>
        <PostSidebar post={post} />
        <PostContent>
          <PostUsername post={post} />
          <PostComment post={post} refresh={refresh} setRefresh={setRefresh} />
          <LinkSnippet post={post} />
        </PostContent>
        <DeletePostButton post={post} />
      </PostContainer>
      <Comments post={post} />
    </Container>
  );
}
