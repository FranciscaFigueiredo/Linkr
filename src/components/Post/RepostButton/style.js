import styled from "styled-components";

const Container = styled.div`
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    button{
        width: 20px;
        height: 18px;
        background-color: transparent;
        margin-bottom: 5px;

        cursor: ${({isDisabled}) => isDisabled || 'pointer'};
    }

    img{
        height: 100%;
        width: 100%;
    }

    span{
        text-align: center;
        font-size: 11px;
        font-weight: 400;
        line-height: 15px;
    }
`

const ModalQuestionContainer = styled.div`
    width: 597px;
    height: 210px;
    background: #333333;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .span{
        width: 299px;
        margin-bottom: 23px;

        font-style: normal;
        font-weight: 700;
        font-size: 29px;
        line-height: 35px;
        text-align: center;
        color: #FFFFFF;
    }

    button{
        width: 134px;
        height: 37px;
        background: #1877F2;
        border-radius: 5px;

        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        text-align: center;
        color: #FFFFFF;
    }

    .no{
        margin-right: 27px;
        background: #FFFFFF;

        color: #1877F2;
    }
`

export { Container, ModalQuestionContainer }
