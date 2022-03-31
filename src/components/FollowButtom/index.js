import Button from "./style";
import { toastError } from '../toasts.js';
import { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { followUser, unfollowUser } from "../../services/linkr";

export default function FollowButtom({ isFollowed, setIsFollowed, idUser }){
  const [disabled, setDisabled] = useState(false);
  const { user } = useContext(UserContext);

  function clickButtom(){
    setDisabled(true);
    if(isFollowed){
    	unfollowUser(user.token, idUser)
        .then(()=>{
          setIsFollowed(false);
          setDisabled(false);
         })
        .catch(()=>{
           toastError(
                'An error occurred while trying to unfollow the user, please refresh the page'
            );
          setDisabled(false); 
         });
    } else{
      followUser(user.token, idUser)
      .then(()=>{
        setIsFollowed(true);
        setDisabled(false);
       })
      .catch(()=>{
         toastError(
           'An error occurred while trying to follow the user, please refresh the page'
         );
         setDisabled(false); 
       });
    }
  }
  return(
    <Button isFollowed={isFollowed} disabled={disabled} onClick={clickButtom}>
      {(isFollowed) ? "Unfollow" : "Follow"}
    </Button>
  ); 
}

