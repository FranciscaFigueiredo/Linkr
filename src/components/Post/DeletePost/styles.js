import styled from 'styled-components';

const DeleteButtonContainer = styled.div`
  width: 14px;
  aspect-ratio: 1;
  position: absolute;
  top: 20px;
  right: 22px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ModalContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;

  span {
    font: 700 34px Lato;
  }

  @media (max-width: 375px) {
    span {
      font-size: 16px;
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 27px;
  bottom: 0;

  div {
    width: 134px;
    aspect-ratio: 3.621;
    font: 700 18px Lato;
    cursor: pointer;
  }

  div:first-of-type {
    color: #1877f2;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div:last-of-type {
    color: #fff;
    background-color: #1877f2;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 375px) {
    div {
      width: 40%;
      height: 30px;
      font-size: 15px;
    }
  }
`;

export { DeleteButtonContainer, ModalContentContainer, ButtonsContainer };
