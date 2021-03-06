import { useContext } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import IntroductionText from '../../components/IntroductionText/IntroductionText';
import ModalContext from '../../contexts/ModalContext';
import { postLogin } from '../../services/linkr';
import ModalError from '../../shared/Modals/ModalError';
import ModalSuccess from '../../shared/Modals/ModalSuccess';

import { PageContainer } from '../../styles/ContainerStyle';
import { ButtonSubmit, Form, Input, Redirect } from '../../styles/FormStyle';

export default function Login({ user, setUser, setToken }) {
  const navigate = useNavigate();
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const [disable, setDisable] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (user) {
    navigate('/timeline');
  }

  function redirectLogin(res) {
    setToken(res.data.token);

    const user = JSON.stringify({
      userId: res.data.userId,
      username: res.data.username,
      pictureUrl: res.data.pictureUrl,
      token: res.data.token,
    });
    sessionStorage.setItem('user', user);
    setUser(user);

    setTimeout(() => {
      navigate('/timeline');
    }, 2000);
  }

  function login(event) {
    event.preventDefault();
    setDisable(true);

    postLogin({
      email,
      password,
    })
      .then((res) => {
        setMessage('');
        setModalSuccess(true);
        redirectLogin(res);
      })
      .catch((err) => {
        console.error();

        setPassword('');
        setDisable(false);

        if (err.response.status === 422) {
          setMessage('Digite dados válidos');
          setIsModalOpen(true);
        }

        if (err.response.status === 401) {
          setEmail('');
          setMessage(err.response.data);
          setIsModalOpen(true);
        }

        if (err.response.status === 500) {
          setMessage('Servidor fora de área, tente novamente mais tarde');
          setIsModalOpen(true);

          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      });
  }

  return (
    <PageContainer>
      <IntroductionText />
      <Form onSubmit={login}>
        <Input
          type='email'
          placeholder='e-mail'
          disabled={disable}
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type='password'
          placeholder='password'
          disabled={disable}
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <ButtonSubmit disabled={disable}>Log In</ButtonSubmit>
        <Link to='/sign-up'>
          <Redirect>First time? Create an account!</Redirect>
        </Link>
      </Form>

      {isModalOpen ? (
        <ModalError message={message} isModalOpen={ isModalOpen } setIsModalOpen={setIsModalOpen} />
      ) : (
        ''
      )}

      {modalSuccess ? <ModalSuccess message={message} /> : ''}
    </PageContainer>
  );
}
