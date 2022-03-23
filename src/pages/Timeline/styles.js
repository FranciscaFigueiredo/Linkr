import styled from 'styled-components';

const TimelineContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 72px;
  display: flex;
  justify-content: center;
`;

const TimelineParent = styled.div`
  margin-top: 78px;
  width: 611px;
  display: flex;
  flex-direction: column;

  #title {
    font: 700 43px 'Oswald';
    margin-bottom: 43px;
  }
`;

const PublishPlaceholder = styled.div`
  width: 611px;
  min-height: 209px;
  background-color: lightpink;
  color: red;
  border-radius: 16px;
  margin-bottom: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { TimelineContainer, TimelineParent, PublishPlaceholder };
