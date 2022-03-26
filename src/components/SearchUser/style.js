import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";

const Container = styled.div`
  width: 563px;
  min-height: 45px;
  
  border-radius: 8px;

  background-color: #FFFFFF;

  display: flex;
  flex-direction: column;

  align-self: start;

  margin-top: 13px;

  @media (max-width: 940px) {
    display: none;
  }
`;
const HeaderStyle = styled.div`
  width: 100%;
  height: 45px;

  display: flex;
  align-items: center;
	justify-content: space-between;

  padding: 10px 10px 10px 17px;

  input{
    width: 480px;
    height: 35px;

    border: 0px solid #FFFFFF;
    border-radius: 5px;

    color: #000000;
    font-weight: 400;
    font-size: 19px;
  }
  input::placeholder{
    color: #C6C6C6;
    font-weight: 400;
    font-size: 19px;
  }
  input:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;
const BodyStyle = styled.div`
  width: 100%;
  
  background-color: #E7E7E7;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;
const User = styled.div`
  width: 100%;
  height: 67px;

  padding: 0px 17px 0px 17px;

  display: flex;
  align-items: center;
	justify-content: flex-start;
  gap: 12px;

  img{
    width: 39px;
    height: 39px;

    border-radius: 50%;
  }

  p{
    font-size: 19px;
    color:#515151;
  }
  &:hover{
    cursor:pointer;
  }
`;
const Search = styled(AiOutlineSearch)`
    color: #C6C6C6;

    cursor: pointer;

    font-size: 21px;
`;

export {
  Container,
  HeaderStyle,
  BodyStyle,
  User,
  Search,
};