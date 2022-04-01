import styled from 'styled-components';

const Button = styled.div`
  width: 112px;
  height: 31px;
  
  display: flex;
  justify-content: center;
  align-items: center; 

  font-size: 14px;
  font-weight: 700;

  border-radius: 5px;

  position: absolute;

  margin-top: 26px;

  background-color: ${props => (props.disabled) ? '#A9A9A9' : (props.isFollowed) ? '#FFFFFF' : '#1877F2'};
  color: ${props => (props.isFollowed) ? '#1877F2' : '#FFFFFF'};

  pointer-events: ${props => (props.disabled)? 'none' : 'auto'};

  &:hover{
    cursor: ${props => (props.disabled)? 'none' : 'pointer'};
  }

  @media (max-width: 611px) {
    display: none;
  }
 
`;

export default Button;
