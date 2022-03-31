import { Form, WriteCommentContainer } from './styles.js';
import { FiSend } from 'react-icons/fi';
import { useContext, useState } from 'react';
import Loading from './Loading.js';
import UserContext from '../../../../contexts/UserContext.js';
import { publishComment } from '../../../../services/linkr.js';
import { toastError } from '../../../toasts.js';
import getComments from './getComments.js';
export default function WriteComment({ post, setComments }) {
  const { token, user } = useContext(UserContext);

  const [value, setValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setDisabled(true);
    publishComment(token, post.id, value)
      .then(() => {
        setValue('');
        setDisabled(false);
        setLoading(false);
        getComments(post, setComments);
      })
      .catch(() => {
        toastError('Comment failed to post. Please, try again');
        setDisabled(false);
        setLoading(false);
      });
  }

  return (
    <WriteCommentContainer>
      <img src={user.pictureUrl} alt='' />
      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='write a comment...'
          disabled={disabled}
          required
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button disabled={disabled}>
          {loading ? <Loading /> : <FiSend />}
        </button>
      </Form>
    </WriteCommentContainer>
  );
}
