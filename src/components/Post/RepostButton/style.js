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
export default Container
