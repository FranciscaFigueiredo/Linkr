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
              <PostSidebar>
                <img src={post.picture_url} />
              </PostSidebar>
              <PostContent>
                <span id='name'>{post.username}</span>
                {post.comment && <span id='comment'>{post.comment}</span>}
                <span id='link'>{post.link}</span>
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
  width: 14%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 80%;
    aspect-ratio: 1;
    border-radius: 100%;
  }
`;

const PostContent = styled.div`
  width: 86%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  #name {
    font: 400 17px 'Lato';
  }

  #comment {
    font: 400 15px 'Lato';
    color: #b7b7b7;
  }
`;
