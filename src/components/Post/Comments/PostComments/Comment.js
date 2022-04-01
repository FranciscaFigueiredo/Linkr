import { CommentContainer, CommentContent } from './styles.js';
import { useNavigate } from 'react-router-dom';

export default function Comment({ comment, post }) {
  const navigate = useNavigate();

  const follows = JSON.parse(localStorage.getItem('follows')).map(
    (followed) => followed.followed_id
  );

  let userInfo = '';
  if (comment.userId === post.userId) userInfo = "• post's author";

  if (follows.find((followedId) => followedId === comment.userId))
    userInfo += '• following';

  return (
    <CommentContainer>
      <img src={comment.userPic} alt='' />
      <CommentContent>
        <div id='userContainer'>
          <span
            id='commentUsername'
            onClick={() => {
              navigate(`/users/${comment.userId}`);
            }}
          >
            {comment.username}
          </span>
          <span id='userInfo'>{userInfo}</span>
        </div>
        <span id='commentText'>{comment.text}</span>
      </CommentContent>
    </CommentContainer>
  );
}
