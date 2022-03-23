import styled from "styled-components";

const Container = styled.div`
    width: 611px; //100%
    height: 209px;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    display: flex;
    .image{
        width: 86px;
        padding: 18px 16px;
        img{
            width: 100%;
            height: 50px;
            border-radius: 26.5px;
        }
    }
    form{
        width: 100%;
        height: 100%;
        padding: 21px 22px 16px 0;

        display: flex;
        flex-direction: column;

        h1{
            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 20px;
            line-height: 24px;
            color: #707070;
            
            margin-bottom: 15px;
        }
        input{
            height: 30px;
            background: #EFEFEF;
            padding-left: 13px;
            border-radius: 5px;

            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;
            ::placeholder{
                color: #949494;
            }
        }
        .comment{
            height: 66px;
            background: #EFEFEF;
            padding-left: 13px;
            padding-top: 8px;
            border-radius: 5px;
            margin-top: 5px;
            margin-bottom: 5px;

            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 300;
            font-size: 15px;
            line-height: 18px;
        }
        button{
            width: 112px;
            height: 31px;
            background: #1877F2;
            border: none;
            border-radius: 5px;
            align-self: end;

            font-family: 'Lato', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: #FFFFFF;
        }
    }
    @media (max-width: 611px) {
        width: 375px; //apaga
        height: 164px;
        border-radius: 0;
        .image{
            display: none;
        }
        form{
            padding: 10px 15px 12px 16px;
            h1{
                font-size: 17px;
                line-height: 20px;
                text-align: center;
            }
            input{
                font-size: 13px;
                line-height: 16px;
            }
            .comment{
                height: 47px;
                font-size: 13px;
                line-height: 16px;
            }
            button{
                height: 22px;
                font-size: 13px;
                line-height: 16px;
            }

        }
    }
`
export default Container