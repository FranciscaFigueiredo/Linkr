import styled from 'styled-components';
import { TiPencil } from 'react-icons/ti';

const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  #noPosts {
    font: 700 17px 'Lato';
    margin-top: 29px;
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
  position: relative;

  position: relative;
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
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
`;

const Options = styled.div`
  all: unset;
  position: absolute;
  right: 45px;
  top: 20px;
  z-index: 5;

  display: flex;
  gap: 10px;
`;

const Edit = styled(TiPencil)`
  color: #FFFFFF;

  cursor: pointer;

  font-size: 21px;
`;
const EditArea = styled.textarea`
  border: 0px solid #FFFFFF;
  border-radius: 7px;

  color: #4C4C4C;
  font-weight: 400;
  font-size: 14px;

  &::placeholder{
    color: #4C4C4C;
    font-weight: 400;
    font-size: 14px;
  }
  &:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

export { PostsContainer, Post, PostSidebar, PostContent, Hashtag, Options, Edit, EditArea };
