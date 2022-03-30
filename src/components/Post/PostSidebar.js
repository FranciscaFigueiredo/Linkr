import { useContext } from 'react';
import UserContext from '../../contexts/UserContext.js';
import Like from '../Like.js';
import { PostSidebarContainer } from './styles.js';
import RepostButton from './RepostButton/index.js';


export default function PostSidebar({ post }) {
  const { user } = useContext(UserContext);

  return (
    <PostSidebarContainer>
      <img src={post.userPic} alt='user pic' />
      <Like post={{ ...post }} likes={[...post.likes]} user={user} />
      <RepostButton post={post} />
    </PostSidebarContainer>
  );
}
