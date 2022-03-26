import { createContext, useState } from 'react';

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState();
  const [postId, setPostId] = useState(null);

  return (
    <PostsContext.Provider value={{ posts, setPosts, postId, setPostId }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContext;
