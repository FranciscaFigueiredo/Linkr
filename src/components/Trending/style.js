import styled from "styled-components";

const TrendingContainer = styled.div`
    width: 301px;

    background-color: #171717;

    border-radius: 16px;

    display:flex;
    flex-direction: column;

    gap: 15px;
`;
const HeaderTrending = styled.div`
    width: 100%;
    height: 61px;

    padding: 9px 16px 12px 16px;

    border-bottom: 1px solid #484848;
    p{
        font-family: 'Oswald';
        font-size: 27px;
        font-weight: 700;
        line-height: 40px;
    }
`;

const BodyTrending = styled.div`
    display:flex;
    flex-direction: column;
    gap: 10px;

    padding: 9px 16px 12px 16px;

    p{
        color:#FFFFFF;
        font-weight: 700;
        font-size: 19px;
        line-height: 23px;
    }
`;

export { TrendingContainer, HeaderTrending, BodyTrending };