import styled from 'styled-components';

const LinkSnippetContainer = styled.div`
  width: 100%;
  height: 60%;
  position: absolute;
  bottom: 0;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;

  img {
    width: 30%;
    aspect-ratio: 1;
    border-radius: 0 11px 11px 0;
  }
`;

const Content = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 0 24px 24px;
  word-break: break-all;

  #snippetTitle {
    color: #cecece;
    font: 400 16px 'Lato';
    line-height: 15px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 36px;
  }

  #snippetDescription {
    color: #9b9595;
    font: 400 11px 'Lato';
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 39px;
    margin-bottom: 3px;
  }

  #snippetUrl {
    font: 400 11px 'Lato';
    color: #cecece;
  }
`;

export { LinkSnippetContainer, Content };
