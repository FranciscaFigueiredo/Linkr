import { useContext } from 'react';
import UserContext from '../../../contexts/UserContext.js';
import { Edit, Options } from '../styles.js';

export default function EditPostButton({ post, edit, setEdit, setComment }) {
  const { user } = useContext(UserContext);
  if (user.username !== post.username) return '';

  return (
    <Options>
      <Edit
        onClick={() => {
          setEdit({
            status: !edit.status,
            idPost: post.id,
          });
          setComment(post.comment);
        }}
      />
    </Options>
  );
}
