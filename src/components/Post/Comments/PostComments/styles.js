import styled from 'styled-components';

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentContainer = styled.div`
  display: flex;
  padding: 25px 15px 25px 0;
  border-bottom: 1px solid #353535;

  img {
    width: 39px;
    aspect-ratio: 1;
    border-radius: 100%;
    margin-right: 18px;
  }

  #commentUsername {
    font: 700 14px 'Lato';
    margin-right: 4px;
    color: #f3f3f3;
  }

  #userInfo {
    font: 400 14px 'Lato';
    color: #565656;
  }

  #commentText {
    font: 400 14px 'Lato';
    color: #acacac;
  }
`;

const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export { CommentsContainer, CommentContainer, CommentContent };
