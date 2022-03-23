import styled from 'styled-components';

const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  #noPosts {
    font: 700 17px 'Lato';
  }
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
  position: relative;

  a {
    all: unset;
    cursor: pointer;
  }

  #name {
    font: 400 17px 'Lato';
  }

  #comment {
    font: 400 15px 'Lato';
    color: #b7b7b7;
  }
`;

export { PostsContainer, Post, PostSidebar, PostContent };
