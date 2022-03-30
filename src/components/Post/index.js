import { LinkSnippet } from '../LinkSnippet/index.js';
import { Container, PostContainer, PostContent } from './styles.js';
import { DeletePostButton } from './DeletePost/index.js';
import PostSidebar from './PostSidebar.js';
import PostUsername from './PostUsername.js';
import PostComment from './PostComment.js';
import Comments from './Comments/index.js';
import { useState } from 'react';

export default function Post({ post, refresh, setRefresh }) {
  const [showComments, setShowComments] = useState(false);
  const commentsProps = { showComments, setShowComments };

  return (
    <Container>
      <PostContainer>
        <PostSidebar post={post} commentsProps={commentsProps} />
        <PostContent>
          <PostUsername post={post} />
          <PostComment post={post} refresh={refresh} setRefresh={setRefresh} />
          <LinkSnippet post={post} />
        </PostContent>
        <DeletePostButton post={post} />
      </PostContainer>
      <Comments post={post} commentsProps={commentsProps} />
    </Container>
  );
}
