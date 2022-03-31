import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DeletePostModal from '../../components/Post/DeletePost/ConfirmationModal.js';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts';
import Trending from '../../components/Trending';
import { getUserById } from '../../services/linkr';
import { TimelineContainer, TimelineParent } from '../Timeline/styles';
import FollowButtom from '../../components/FollowButtom/index.js';
import { useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function UserTimeline() {
  const { id } = useParams();
  const [refresh, setRefresh] = useState(true);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [isFollowed, setIsFollowed] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const promise = getUserById(id, user.token);
    promise
      .then((res) => {
        console.log(res.data);
        setName(res.data.username);
        setImage(res.data.picture_url);
        setIsFollowed(res.data.isFollowed);
      })
      .catch((err) => console.log(err.response.message));
  }, [id]);
  return (
    <>
      <Header />
      <TimelineContainer>
        <TimelineParent>
          <div id='titleContainer'>
            <img src={image} alt={name}/>
            <span id='title'>{`${name}'s posts`}</span>
          </div>
          <Posts id={id} refresh={refresh} setRefresh={setRefresh} />
        </TimelineParent>
        <div id='subContainer'>
          {(user.username === name) ? '' : 
          <FollowButtom isFollowed={isFollowed} setIsFollowed={setIsFollowed} idUser={id}/>}
          <Trending refresh={refresh} />
        </div>
        <DeletePostModal />
      </TimelineContainer>
    </>
  );
}
