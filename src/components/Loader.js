import { TailSpin } from 'react-loader-spinner';
import styled from 'styled-components';

export default function Loader() {
  return (
    <LoaderContainer>
      <TailSpin color='white' />
      <span>Loading</span>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-top: 29px;

  span {
    font: 400 17px 'Lato';
  }

  @media (max-width: 611px) {
    margin-top: 16px;
  }
`;
