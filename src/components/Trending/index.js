import { useEffect } from "react";
import { getHashtag } from "../../services/linkr";
import { TrendingContainer, HeaderTrending, BodyTrending } from "./style";

export default function Trending(){
    useEffect(()=>{
        const promise = getHashtag();
    },[]);
    return (
        <TrendingContainer>
            <HeaderTrending>
                <p>trending</p>
            </HeaderTrending>
            <BodyTrending>
                <p>#javaScript</p>
                <p>#javaScript</p>
                <p>#javaScript</p>
                <p>#javaScript</p>
            </BodyTrending>
        </TrendingContainer>
    );
}
