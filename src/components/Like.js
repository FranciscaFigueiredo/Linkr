import { useEffect, useState } from 'react';
import {
  Heart,
  HeartRed,
} from './Posts/styles';
import treatLikes from '../utils/treatLikes.js';

export default function Like({ post, user, like, dislike }) {
    const [liked, setLiked] = useState(0);

    useEffect(() => {
        setLiked(0);
    }, [liked]);
    // console.log(post);

    if (!!(post.likes.find((like) => like?.username === user?.username))) {
        setLiked(1)
    }

    return (
        liked ?
        <HeartRed onClick={ () => dislike(post.id) } data-tip={treatLikes({ post, setLiked})} />
        : <Heart onClick={ () => like(post.id) } data-tip={treatLikes({ post, setLiked})} />
    );
}
