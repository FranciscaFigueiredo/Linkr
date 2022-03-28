import { updateComment } from '../../services/linkr.js';
import { toastError } from '../toasts.js';
import styled from 'styled-components';
import { useContext, useEffect, useRef } from 'react';
import UserContext from '../../contexts/UserContext.js';

export default function EditPost(props){
  const [ comment, setComment, edit, setEdit, post, disabled, setDisabled, commentRef, refresh, setRefresh ] = props.children;
  const { user } = useContext(UserContext);

  useEffect(()=>{
    commentRef.current.focus();
  },[]);
  
  return(

    <EditArea 
      value={comment} 
      onChange={e=>setComment(e.target.value)}
      ref={commentRef}
      disabled={disabled}
      onKeyDown={e=>{
        if(e.keyCode === 27){
          setEdit({
            status: false,
            idPost: null
        });
        } else if (e.keyCode === 13){
          updateComment(user.token, comment, post.id, setDisabled)
          .then((ans)=>{
            setDisabled(false);
            post.comment = comment;
            setEdit({
              status: false,
              idPost: null
            });
            setComment('');
            setRefresh(!refresh);
          })
          .catch(() => {
            toastError(
              'An error occurred while trying to update the post, please refresh the page'
            );
            setDisabled(false);
            setEdit({
              status: false,
              idPost: null
            });
            setComment('');
        });
      }
    }}/>
  );
}

const EditArea = styled.textarea`
  border: 0px solid #FFFFFF;
  border-radius: 7px;

  color: #4C4C4C;
  font-weight: 400;
  font-size: 14px;

  &::placeholder{
    color: #4C4C4C;
    font-weight: 400;
    font-size: 14px;
  }
  &:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;