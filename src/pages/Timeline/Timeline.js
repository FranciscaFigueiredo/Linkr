import Header from '../../components/Header/Header.js';
import Posts from '../../components/Posts/';
import Publish from '../../components/Publish/index.js';
import { UserLoginValidation } from '../../services/userLogin.js';
import { TimelineContainer, TimelineParent } from './styles.js';

export default function Timeline() {
  const user = UserLoginValidation();
  return (
    <>
      <Header />
      <TimelineContainer>
        <TimelineParent>
          <span id='title'>timeline</span>
          <Publish />
          <Posts />
        </TimelineParent>
      </TimelineContainer>
    </>
  );
}
