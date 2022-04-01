import { createContext, useState } from 'react';

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  const [data, setData] = useState(null);

  return (
    <PostsContext.Provider value={{ posts, setPosts, postId, setPostId, data, setData }}>
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContext;
