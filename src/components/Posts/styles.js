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

  @media (max-width: 611px) {
    margin-top: 0;
    gap: 5px;
  }
`;

const Post = styled.div`
  width: 100%;
  height: auto;
  background-color: #171717;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  word-wrap: break-word;

  &:first-of-type {
    margin-top: 29px;
  }

  @media (max-width: 611px) {
    border-radius: 0;
    height: auto;

    &:first-of-type {
      margin-top: 16px;
    }
  }
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
    cursor: pointer;
  }

  #comment {
    font: 400 15px 'Lato';
    color: #b7b7b7;
  }
`;

const Hashtag = styled.span`
  color:#FFFFFF;
  font-weight: 700;
  cursor: pointer;
`;

export { PostsContainer, Post, PostSidebar, PostContent, Hashtag };
