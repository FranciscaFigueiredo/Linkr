import styled from 'styled-components';

const TimelineContainer = styled.div`
  width: 100vw;
  margin-top: 53px;
  display: flex;
  justify-content: center;
  gap: 25px;

  #noPosts {
    width: fit-content;
    font: 700 17px 'Lato';
    margin: 29px auto;
  }

  #subContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  @media (max-width: 940px) {
    gap: 0;
  }
`;

const TimelineParent = styled.div`
  width: 611px;
  display: flex;
  flex-direction: column;

  #titleContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
    margin: 10px 0 43px 0;

    img {
      width: 50px;
      height: 50px;

      border-radius: 50%;
    }
  }
  #title {
    font: 700 43px 'Oswald';
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

const ButtonRefresh = styled.div`
  width: 611px;
  height: 61px;

  color: #ffffff;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  line-height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #1877f2;
  border-radius: 16px;
`;

export { TimelineContainer, TimelineParent, PublishPlaceholder, ButtonRefresh };
