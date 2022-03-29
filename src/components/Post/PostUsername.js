import { useNavigate } from 'react-router-dom';

export default function PostUsername({ post }) {
  const navigate = useNavigate();

  return (
    <span
      id='name'
      onClick={() => {
        navigate(`/users/${post.userId}`);
      }}
    >
      {post.username}
    </span>
  );
}
