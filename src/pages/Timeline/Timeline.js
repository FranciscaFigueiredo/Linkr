import { useState } from 'react';
import Header from '../../components/Header/Header.js';
import Posts from '../../components/Posts/';
import Publish from '../../components/Publish/index.js';
import { TimelineContainer, TimelineParent } from './styles.js';
import Trending from '../../components/Trending/index.js';
import DeletePostModal from '../../components/Post/DeletePost/ConfirmationModal.js';

export default function Timeline() {
  const [refresh, setRefresh] = useState(true);

  return (
    <>
      <Header />
      <TimelineContainer>
        <TimelineParent>
          <div id='titleContainer'>
            <span id='title'>timeline</span>
          </div>
          <Publish refresh={refresh} setRefresh={setRefresh} />
          <Posts refresh={refresh} setRefresh={setRefresh} />
        </TimelineParent>
        <div>
          <Trending refresh={refresh} />
        </div>
        <DeletePostModal />
      </TimelineContainer>
    </>
  );
}
