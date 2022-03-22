import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import IntroductionText from "../../components/IntroductionText";
import ModalError from "../../shared/ModalError";
import ModalSuccess from "../../shared/ModalSuccess";

import { PageContainer } from "../../styles/ContainerStyle";
import { ButtonSubmit, Form, Input, Redirect } from "../../styles/FormStyle";

export default function Login() {
    const navigate = useNavigate()

    const [disable, setDisable] = useState(false);
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalError, setModalError] = useState(false);
    const [message, setMessage] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login(event) {
        event.preventDefault();
        setDisable(true);
    }

    return (
        <PageContainer>
            <IntroductionText />
            <Form onSubmit={ login }>
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
                <ButtonSubmit disabled={disable}>Log In</ButtonSubmit>
            </Form>
            <Link to='/sign-up'>
                <Redirect>First time? Create an account!</Redirect>
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