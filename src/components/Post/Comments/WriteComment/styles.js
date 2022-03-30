import styled from 'styled-components';

const WriteCommentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 19px;
  border-top: 1px solid #353535;

  img:first-of-type {
    width: 40px;
    aspect-ratio: 1;
    border-radius: 100%;
    flex-grow: 1;
    margin-right: 14px;
  }
`;

const Form = styled.form`
  flex-grow: 30;
  background-color: #252525;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding-right: 12px;

  input[type='text'] {
    background-color: transparent;
    padding: 11px 15px;
    width: 100%;
    color: white;
  }

  input::placeholder {
    color: #575757;
  }

  button {
    all: unset;
    cursor: pointer;
  }
`;
export { WriteCommentContainer, Form };
