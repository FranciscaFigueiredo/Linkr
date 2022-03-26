import styled from 'styled-components';

const TimelineContainer = styled.div`
  width: 100vw;
  margin-top: 53px;
  display: flex;
  justify-content: center;
  gap: 25px;

  .ReactModal__Overlay--after-open {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TimelineParent = styled.div`
  width: 611px;
  display: flex;
  flex-direction: column;

  #title {
    font: 700 43px 'Oswald';
    margin-bottom: 43px;
  }
  @media (max-width: 611px) {
    width: 100%;

    #title {
      padding-left: 17px;
      margin-bottom: 0;
    }
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
