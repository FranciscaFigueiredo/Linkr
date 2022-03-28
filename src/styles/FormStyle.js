import styled from "styled-components";

const Form = styled.form`
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
`

const Input = styled.input`
    width: 80vw;
    height: 55px;

    color: #000000;
    font-size: 22px;
    font-family: 'Oswald', sans-serif;

    margin-bottom: 10px;
    padding: 0 20px;

    background-color: #ffffff;
    border-radius: 6px;

    outline: 0;

    &placeholder {
        color: #9f9f9f;
    }

    @media (min-width: 611px) {
		width: 30vw;
	}
`

const ButtonSubmit = styled.button`
    width: 80vw;
    height: 55px;

    color: #ffffff;
    font-size: 22px;
    font-family: 'Oswald', sans-serif;
    line-height: 33px;

    background-color: #1877f2;

    margin-bottom: 10px;
    padding: 0 20px;

    border-radius: 6px;

    @media (min-width: 611px) {
		width: 30vw;
	}
`

const Redirect = styled.span`
    width: 80vw;

    color: #ffffff;
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    text-decoration: underline;

    margin-bottom: 10px;
    padding: 0 20px;

    border-radius: 6px;

    @media (min-width: 611px) {
		width: 30vw;
	}
`

export {
    Form,
    Input,
    ButtonSubmit,
    Redirect,
};