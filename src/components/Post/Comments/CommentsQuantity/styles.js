import styled from 'styled-components';
import { AiOutlineComment } from 'react-icons/ai';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 15px auto 2px;
  gap: 2px;
  word-break: break-all;

  cursor: pointer;

  span {
    font-size: 11px;
    font-weight: 400;
    line-height: 15px;
  }
`;

const CommentsIcon = styled(AiOutlineComment)`
  font-size: 20px;
  text-align: center;
`;

export { Container, CommentsIcon };
