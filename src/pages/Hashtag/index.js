import Header from '../../components/Header/Header.js';
import Posts from '../../components/Posts/';
import Trending from '../../components/Trending/index.js';
import { TimelineContainer, TimelineParent } from './style.js';
import { useParams } from 'react-router';
import { useState } from 'react';
import DeletePostModal from '../../components/Post/DeletePost/ConfirmationModal.js';

export default function Hashtag() {
  const { hashtag } = useParams();
  const [refresh, setRefresh] = useState(true);
  return (
    <>
      <Header />
      <TimelineContainer>
        <TimelineParent>
          <span id='title'># {hashtag}</span>
          <Posts hashtag={hashtag} refresh={refresh} setRefresh={setRefresh} />
        </TimelineParent>
        <div>
          <Trending />
        </div>
        <DeletePostModal />
      </TimelineContainer>
    </>
  );
}
