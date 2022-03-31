import { createContext, useState } from 'react';

const PostsContext = createContext();

export function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [postId, setPostId] = useState(null);
  const [showComments, setShowComments] = useState(false);

  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
        postId,
        setPostId,
        showComments,
        setShowComments,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export default PostsContext;
