import { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { postPublish } from '../../services/linkr';
import Container from './style';

export default function Publish({refresh, setRefresh}) {
  const [link, setLink] = useState('');
  const [comment, setComment] = useState('');
  const [isLoading, setIsLoading] = useState(0);
  const { user } = useContext(UserContext);

  let token = null;
  token = user?.token;

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(1);
    postPublish({ link, comment }, token || JSON.parse(sessionStorage.getItem('user')).token)
      .then(() => {
        setLink('');
        setComment('');
        setRefresh(!refresh);
      })
      .catch((err) => {
        alert('Houve um erro ao publicar seu link');
        console.error()
      })
      .finally(() => {
        setIsLoading(0);
      });
  }
  
  if (!user) {
    return '';
  }
  return (
    <Container>
      <div className='image'>
        <img src={user?.pictureUrl || JSON.parse(sessionStorage.getItem('user')).pictureUrl} alt='Profile' /> 
      </div>

      <form onSubmit={handleSubmit}>
        <h1>What are you going to share today?</h1>
        <input
          type='url'
          placeholder='http://'
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
          disabled={isLoading === 1 ? true : false}
        />
        <textarea
          type='text'
          placeholder='Awesome article about #javascript'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          disabled={isLoading === 1 ? true : false}
          className='comment'
          maxLength='100'
        />
        <button disabled={isLoading === 1 ? true : false}>
          {isLoading === 0 ? 'Publish' : 'Publishing'}
        </button>
      </form>
    </Container>
  );
}
