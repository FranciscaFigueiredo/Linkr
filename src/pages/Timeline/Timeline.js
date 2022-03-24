import Header from '../../components/Header/Header.js';
import Posts from '../../components/Posts/';
import Publish from '../../components/Publish/index.js';
import Trending from '../../components/Trending/index.js';
import { TimelineContainer, TimelineParent } from './styles.js';

export default function Timeline() {
  return (
    <>
      <Header/>
      <TimelineContainer>
        <TimelineParent>
          <span id='title'>timeline</span>
          <Publish />
          <Posts />
        </TimelineParent>
        <Trending/>
      </TimelineContainer>
    </>
  );
}
