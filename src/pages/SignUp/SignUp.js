import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import IntroductionText from "../../components/IntroductionText";
import { postSignUp } from "../../services/linkr";
import ModalError from "../../shared/ModalError";
import ModalSuccess from "../../shared/ModalSuccess";

import { PageContainer } from "../../styles/ContainerStyle";
import { ButtonSubmit, Form, Input, Redirect } from "../../styles/FormStyle";

export default function SignUp() {
    const navigate = useNavigate()

    const [disable, setDisable] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalError, setModalError] = useState(false);
    const [message, setMessage] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [pictureUrl, setPictureUrl] = useState("");

    function signup(event) {
        event.preventDefault();
        setDisable(true);

        postSignUp({
            email,
            password,
            username,
            pictureUrl,
        }).then((res) => {
            setMessage('Cadastro realizado com sucesso!');
            setModalSuccess(true);
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }).catch((err) => {
            console.error();

            setPassword('');
            setDisable(false);

            if(err.response.status === 422) {
                setMessage('Digite dados válidos');
                setModalError(true);
            }

            if(err.response.status === 409) {
                setEmail('');
                setUsername('');
                setMessage(err.response.data);
                setModalError(true);
            }

            if (err.response.status === 500) {
                setMessage("Servidor fora de área, tente novamente mais tarde");
                setModalError(true);
            }
        })
    }
    return (
        <PageContainer>
            <IntroductionText />
            <Form onSubmit={ signup }>
                <Input
                    type='email'
                    placeholder='e-mail'
                    disabled={disable}
                    required
                    value={email}
                    onChange={(event) => (setEmail(event.target.value))}
                />
                <Input
                    type='password'
                    placeholder='password'
                    disabled={disable}
                    required
                    value={password}
                    onChange={(event) => (setPassword(event.target.value))}
                />
                <Input
                    type='text'
                    placeholder='username'
                    disabled={disable}
                    required
                    value={username}
                    onChange={(event) => (setUsername(event.target.value))}
                />
                <Input
                    type='url'
                    placeholder='picture url'
                    disabled={disable}
                    required
                    value={pictureUrl}
                    onChange={(event) => (setPictureUrl(event.target.value))}
                />
                <ButtonSubmit disabled={disable}>Sign Up</ButtonSubmit>
            </Form>
            <Link to='/'>
                <Redirect>Switch back to log in</Redirect>
            </Link>

            {
                modalError ?
                <ModalError message={message} setModal={setModalError} />
                : ''
            }

            {
                modalSuccess ?
                <ModalSuccess message={message} />
                : ''
            }
        </PageContainer>
    );
}