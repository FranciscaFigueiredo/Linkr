import { useContext } from 'react';
import PostContext from '../../contexts/RepostsContext.js';
import { PostContainer } from './styles.js';

export default function PostContainerWrapper({ children }) {
  const { reposts } = useContext(PostContext);
  console.log({ reposts });
  return <PostContainer isRepost={reposts.length}>{children}</PostContainer>;
}
