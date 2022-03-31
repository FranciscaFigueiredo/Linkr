import { CommentContainer, CommentContent } from './styles.js';

export default function Comment({ comment, post }) {
  console.log({ comment });
  console.log({ post });

  let userInfo;
  if (comment.userId === post.userId) userInfo = "• post's author";
  return (
    <CommentContainer>
      <img src={comment.userPic} alt='' />
      <CommentContent>
        <div id='userContainer'>
          <span id='commentUsername'>{comment.username}</span>
          <span id='userInfo'>{userInfo}</span>
          {/* TODO replace static value with logic */}
        </div>
        <span id='commentText'>{comment.text}</span>
      </CommentContent>
    </CommentContainer>
  );
}
