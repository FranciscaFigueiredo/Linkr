import styled from 'styled-components';

const LinkSnippetContainer = styled.div`
  width: 100%;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 11px;
  display: flex;

  img {
    width: 31%;
    aspect-ratio: 1;
    border-radius: 0 11px 11px 0;
  }

  @media (max-width: 390px) {
    height: auto;
  }
`;

const Content = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px 0 24px 24px;
  margin-right: 20px;
  word-break: break-all;

  #snippetTitle {
    color: #cecece;
    font: 400 16px 'Lato';
    line-height: 15px;
  }

  #snippetDescription {
    color: #9b9595;
    font: 400 11px 'Lato';
    overflow: hidden;
  }

  #snippetUrl {
    font: 400 11px 'Lato';
    color: #cecece;
  }

  @media (max-width: 611px) {
    gap: 5px;

    #snippetTitle {
      font: 400 12px 'Lato';
    }
    #snippetDescription,
    #snippetUrl {
      font: 400 10px 'Lato';
    }
  }
`;

export { LinkSnippetContainer, Content };
