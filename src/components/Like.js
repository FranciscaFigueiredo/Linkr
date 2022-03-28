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

    function isLiked(like){
        console.log(like);
        if (likes.length && !(likes.find((like) => like.username === user.username))) {
            console.log('oi');
            return true
        }
        return false;
    }

    return (
        // <>
        likes.length ?
            (likes.map((like, index) => {
                isLiked(like) ?
                <HeartRed key={ index } onClick={ () => dislike(post.id) } data-tip={treatLikes(post)} />
                : <Heart key={ index } onClick={ () => like(post.id) } data-tip={treatLikes(post)} />
            }))
        : (<Heart onClick={ () => like(post.id) } data-tip={treatLikes(post)} />)
            
            
        // </>
    );
}
