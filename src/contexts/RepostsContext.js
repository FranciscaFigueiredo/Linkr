import { createContext } from 'react';
import { useState } from 'react';

const PostContext = createContext();

export function PostProvider({ children }) {
  const [reposts, setReposts] = useState([]);
  const [myRepost, setMyRepost] = useState(null);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(null);

  const [modal, setModal] = useState(false);

  return (
    <PostContext.Provider
      value={{
        reposts,
        setReposts,
        myRepost,
        setMyRepost,
        modal,
        setModal,
        showComments,
        setShowComments,
        comments,
        setComments,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostContext;
