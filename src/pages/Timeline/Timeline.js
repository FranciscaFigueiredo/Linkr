import { useState } from 'react';
import Header from '../../components/Header/Header.js';
import Posts from '../../components/Posts/';
import Publish from '../../components/Publish/index.js';
import { UserLoginValidation } from '../../services/userLogin.js';
import { TimelineContainer, TimelineParent } from './styles.js';
import Trending from '../../components/Trending/index.js';

export default function Timeline() {
  UserLoginValidation();
  const [refresh, setRefresh] = useState(true)
  return (
    <>
      <Header />
      <TimelineContainer>
        <TimelineParent>
          <span id='title'>timeline</span>
          <Publish refresh={refresh} setRefresh={setRefresh} />
          <Posts refresh={refresh} />
        </TimelineParent>
        <Trending />
      </TimelineContainer>
    </>
  );
}
