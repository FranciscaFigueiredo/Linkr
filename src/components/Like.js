import { useEffect, useState } from 'react';
import {
  Heart,
  HeartRed,
} from './Posts/styles';
import treatLikes from '../utils/treatLikes.js';
import ReactTooltip from 'react-tooltip';

export default function Like({ post, likes, user, like, dislike }) {
    const [liked, setLiked] = useState(0);
    useEffect(() => {
        setLiked(0);
    }, [liked]);

    if (!!(likes.find((like) => like?.username === user?.username))) {
        setLiked(1)
    }

    return (<>
        {   liked ?
            <HeartRed onClick={ () => dislike(post.id) } data-tip={treatLikes(post)} />
            : <Heart onClick={ () => like(post.id) } data-tip={treatLikes(post)} />
        }
        <ReactTooltip /></>
    );
}
