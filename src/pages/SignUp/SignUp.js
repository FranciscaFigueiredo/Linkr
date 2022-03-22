import { useState } from "react";
import { Link } from "react-router-dom";

import IntroductionText from "../../components/IntroductionText";
import { PageContainer } from "../../styles/ContainerStyle";
import { ButtonSubmit, Form, Input, Redirect } from "../../styles/FormStyle";

export default function SignUp() {
    const [disable, setDisable] = useState(false);

    function signup(event) {
        event.preventDefault();
        setDisable(true);
    }
    return (
        <PageContainer>
            <IntroductionText />
            <Form onSubmit={ signup}>
                <Input type='text' disabled={disable} placeholder='e-mail' />
                <Input type='text' disabled={disable} placeholder='password' />
                <Input type='text' disabled={disable} placeholder='username' />
                <Input type='text' disabled={disable} placeholder='picture url' />
                <ButtonSubmit>Sign Up</ButtonSubmit>
            </Form>
            <Link to='/login'>
                <Redirect>Switch back to log in</Redirect>
            </Link>
        </PageContainer>
    );
}