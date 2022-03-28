import { TrendingContainer, HeaderTrending, BodyTrending } from "./style";
import { useEffect, useState } from "react";
import { getHashtag } from "../../services/linkr";
import { Link } from "react-router-dom";
import getHashtagsData from "../../utils/getHashtagsData";

export default function Trending({ refresh }){
    const [listHashtags, setListHashtags] = useState([]);
    
    useEffect(()=>{
        getHashtagsData(setListHashtags);
    }, [refresh]);

    return (
        <TrendingContainer>
            <HeaderTrending>
                <p>trending</p>
            </HeaderTrending>
            <BodyTrending>
                {listHashtags}
            </BodyTrending>
        </TrendingContainer>
    );
}
