import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPosts } from '../services/linkr.js';

export default function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPosts().then((res) => setPosts(res.data));
  }, []);
  return (
    <PostsContainer>
      {posts &&
        posts.map((post) => {
          return (
            <Post key={post.id}>
              <PostSidebar></PostSidebar>
              <PostContent>
                <span>a</span>
              </PostContent>
            </Post>
          );
        })}
    </PostsContainer>
  );
}

const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Post = styled.div`
  width: 100%;
  height: 276px;
  background-color: #171717;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const PostSidebar = styled.div`
  flex-grow: 0.14;
  height: 100%;
  background-color: blue;
`;

const PostContent = styled.div`
  flex-grow: 0.86;
  height: 100%;
  background-color: lightblue;
  display: flex;
  flex-direction: column;
`;
