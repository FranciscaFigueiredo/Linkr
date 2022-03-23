import Posts from '../../components/Posts/';
import {
  PublishPlaceholder,
  TimelineContainer,
  TimelineParent,
} from './styles.js';

export default function Timeline() {
  return (
    <TimelineContainer>
      <TimelineParent>
        <h1 id='title'>timeline</h1>
        <PublishPlaceholder>
          <span>PLACEHOLDER</span>
        </PublishPlaceholder>
        <Posts />
      </TimelineParent>
    </TimelineContainer>
  );
}
