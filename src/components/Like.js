import { useContext, useEffect, useState } from 'react';
import { Heart, HeartRed, QuantLikes } from './Posts/styles';
import treatLikes from '../utils/treatLikes.js';
import ReactTooltip from 'react-tooltip';
import UserContext from '../contexts/UserContext.js';
import { dislikeThePost, likeThePost } from '../services/linkr.js';
import { treatPostsData } from '../utils/treatPostsData.js';

export default function Like({ post, likes, user }) {
  const [localPost, setLocalPost] = useState({ ...post });
  const [liked, setLiked] = useState(false);
  const [tooltip, setTooltip] = useState(treatLikes(localPost, user));
  const { token } = useContext(UserContext);

  useEffect(() => {
    if (!!likes.find((like) => like?.username === user?.username)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, []);

  function newTooltip(data) {
    const treatedPost = treatPostsData([...data])[0];
    setLocalPost(treatedPost);
    const newTooltip = treatLikes(treatedPost, user);
    setTooltip(newTooltip);
  }

  function like(id) {
    likeThePost({ id, token })
      .then((res) => {
        newTooltip(res.data);
        setLiked(true);
      })
      .catch(() => console.error());
  }

  function dislike(id) {
    dislikeThePost({ id, token })
      .then((res) => {
        newTooltip(res.data);
        setLiked(false);
      })
      .catch(() => console.error());
  }

  return (
    <>
      <div className='likeContainer' data-tip={tooltip}>
        {liked ? (
          <HeartRed
            onClick={() => {
              dislike(localPost.id);
              setLiked(false);
            }}
          />
        ) : (
          <Heart
            onClick={() => {
              like(localPost.id);
              setLiked(true);
            }}
          />
        )}
        <ReactTooltip />
      </div>
      {localPost.likes.length === 1 ? (
        <QuantLikes> {localPost.likes.length} like </QuantLikes>
      ) : (
        <QuantLikes> {localPost.likes.length} likes </QuantLikes>
      )}
    </>
  );
}
