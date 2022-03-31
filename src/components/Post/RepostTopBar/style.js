import styled from "styled-components";

const Container = styled.div`
  display: ${({isNone}) => !isNone && 'none'};
  height: 70px;
  width: 611px;
  background: #1E1E1E;
  padding-left: 13px;
  border-radius: 16px;

  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  div{
      height: 33px;
      padding: 10px;

      display: flex;
      align-items: center;
  }

  p{
        margin-left: 6px;

        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 11px;
        line-height: 13px;
        color: #FFFFFF;
  }
  span{
      font-weight: bold;
  }

  @media (max-width: 611px) {
    border-radius: 0;
    width: 100%;
  }
`;

export default Container