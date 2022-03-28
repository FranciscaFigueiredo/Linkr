import Header from '../../components/Header/Header.js';
import Posts from '../../components/Posts/';
import Trending from '../../components/Trending/index.js';
import { TimelineContainer, TimelineParent } from './style.js';
import { useParams } from 'react-router';
import DeletePostModal from '../../components/DeletePost/ConfirmationModal.js';
import { useState } from 'react';

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
