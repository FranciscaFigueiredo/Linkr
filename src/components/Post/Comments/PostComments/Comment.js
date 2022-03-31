import { CommentContainer, CommentContent } from './styles.js';

export default function Comment({ comment }) {
  return (
    <CommentContainer>
      <img src={comment.userPic} alt='' />
      <CommentContent>
        <div id='userContainer'>
          <span id='commentUsername'>{comment.username}</span>
          <span id='userInfo'>• following</span>
          {/* TODO replace static value with logic */}
        </div>
        <span id='commentText'>{comment.text}</span>
      </CommentContent>
    </CommentContainer>
  );
}
