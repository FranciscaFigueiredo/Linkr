import { useContext } from 'react';
import UserContext from '../../contexts/UserContext.js';
import Like from '../Like.js';
import CommentsQuantity from './Comments/CommentsQuantity/index.js';
import { PostSidebarContainer } from './styles.js';

export default function PostSidebar({ post, commentsProps }) {
  const { user } = useContext(UserContext);

  return (
    <PostSidebarContainer>
      <img src={post.userPic} alt='user pic' />
      <Like post={{ ...post }} likes={[...post.likes]} user={user} />
      <CommentsQuantity commentsProps={commentsProps} />
    </PostSidebarContainer>
  );
}
