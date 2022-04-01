import { LinkSnippet } from '../LinkSnippet/index.js';
import { Container, PostContent } from './styles.js';
import { DeletePostButton } from './DeletePost/index.js';
import PostSidebar from './PostSidebar.js';
import PostUsername from './PostUsername.js';
import PostComment from './PostComment.js';
import RepostTopBar from './RepostTopBar/index.js';
import { PostProvider } from '../../contexts/RepostsContext';
import Comments from './Comments/index.js';
import PostContainerWrapper from './PostContainerWrapper.js';

export default function Post({ post, refresh, setRefresh }) {
  return (
    <PostProvider>
      <Container>
        <RepostTopBar post={post} />
        <PostContainerWrapper>
          <PostSidebar post={post} />
          <PostContent>
            <PostUsername post={post} />
            <PostComment
              post={post}
              refresh={refresh}
              setRefresh={setRefresh}
            />
            <LinkSnippet post={post} />
          </PostContent>
          <DeletePostButton post={post}/>
        </PostContainerWrapper>
        <Comments post={post} />
      </Container>
    </PostProvider>
  );
}
