import { LinkSnippet } from '../LinkSnippet/index.js';
import { Container, PostContainer, PostContent } from './styles.js';
import { DeletePostButton } from './DeletePost/index.js';
import PostSidebar from './PostSidebar.js';
import PostUsername from './PostUsername.js';
import PostComment from './PostComment.js';
import RepostTopBar from './RepostTopBar/index.js';
import RepostContext from '../../contexts/RepostsContext'
import { useState } from 'react';
import Comments from './Comments/index.js';

export default function Post({ post, refresh, setRefresh }) {
  const [reposts, setReposts] = useState([])
  const [myRepost, setMyRepost] = useState(null)
  const [modal, setModal] = useState(false)
  return (
    <RepostContext.Provider value={{ reposts, setReposts, myRepost, setMyRepost, modal, setModal }}>
    <Container>
      <RepostTopBar post={post}/>
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
  </RepostContext.Provider>
  );
}
