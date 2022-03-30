import styled from 'styled-components';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { TiPencil } from 'react-icons/ti';

const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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

  .likeContainer {
    margin: 15px auto 2px;
  }

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

const Heart = styled(FaRegHeart)`
  color: #ffffff;
  font-size: 18px;
  text-align: center;

  cursor: pointer;
`;

const HeartRed = styled(FaHeart)`
  color: #ff0000;
  font-size: 18px;
  text-align: center;

  cursor: pointer;
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
  color: #ffffff;

  cursor: pointer;

  font-size: 21px;
`;
const EditArea = styled.textarea`
  border: 0px solid #ffffff;
  border-radius: 7px;

  color: #4c4c4c;
  font-weight: 400;
  font-size: 14px;

  &::placeholder {
    color: #4c4c4c;
    font-weight: 400;
    font-size: 14px;
  }
  &:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;

const QuantLikes = styled.h4`
  font-size: 11px;
  font-weight: 400;
  line-height: 15px;
`;

export {
  PostsContainer,
  Post,
  PostSidebar,
  PostContent,
  Hashtag,
  Heart,
  HeartRed,
  Options,
  Edit,
  EditArea,
  QuantLikes,
};
