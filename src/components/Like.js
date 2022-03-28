import { useEffect, useState } from 'react';
import { Heart, HeartRed } from './Posts/styles';
import treatLikes from '../utils/treatLikes.js';
import ReactTooltip from 'react-tooltip';

export default function Like({ post, likes, user, like, dislike }) {
  const [liked, setLiked] = useState(0);
  useEffect(() => {
    if (!!likes.find((like) => like?.username === user?.username)) {
      setLiked(1);
    } else {
      setLiked(0);
    }
  }, []);

  return (
    <div className='likeContainer' data-tip={treatLikes(post, user)}>
      {liked ? (
        <HeartRed
          onClick={() => {
            dislike(post.id);
            setLiked(0);
          }}
        />
      ) : (
        <Heart
          onClick={() => {
            like(post.id);
            setLiked(1);
          }}
        />
      )}
      <ReactTooltip />
    </div>
  );
}
