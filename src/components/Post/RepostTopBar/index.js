import Container from './style';
import repostImg from '../../../assets/repost.svg';
import { useContext, useEffect } from 'react';
import { isReposted } from '../../../services/linkr';
import PostContext from '../../../contexts/RepostsContext';

export default function RepostTopBar({ post }) {
  const { reposts, setReposts, myRepost, setMyRepost } =
    useContext(PostContext);

  const user = JSON.parse(sessionStorage.getItem('user'));

  useEffect(() => {
    const promise = isReposted(user.token, post.id);
    promise.then((res) => setReposts(res.data));
    promise.catch((res) => console.log(res.response));
  }, [myRepost]);

  const isMyRepost = reposts.find((v) => v.user_id === user.userId);
  if (isMyRepost) {
    setMyRepost(true);
  } else {
    setMyRepost(false);
  }

  return (
    <Container isNone={reposts.length}>
      <div>
        <img src={repostImg} alt='repost' />
        <p>
          Re-posted by <span>{myRepost ? 'you' : reposts[0]?.username}</span>
        </p>
      </div>
    </Container>
  );
}
