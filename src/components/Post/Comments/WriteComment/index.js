import { Form, WriteCommentContainer } from './styles.js';
import { FiSend } from 'react-icons/fi';
import { useContext, useState } from 'react';
import Loading from './Loading.js';
import UserContext from '../../../../contexts/UserContext.js';
export default function WriteComment({ post }) {
  const { token } = useContext(UserContext);
  console.log({ token });
  const [comment, setComment] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);
    setLoading(false);
  }
  return (
    <WriteCommentContainer>
      <img src={post.userPic} alt='' />
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='write a comment...'
          disabled={disabled}
          required
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <button disabled={disabled}>
          {loading ? <Loading /> : <FiSend />}
        </button>
      </Form>
    </WriteCommentContainer>
  );
}
