import { TrendingContainer, HeaderTrending, BodyTrending } from "./style";
import { useEffect, useState } from "react";
import { getHashtag } from "../../services/linkr";
import { Link } from "react-router-dom";

export default function Trending(){
    const [listHashtags, setListHashtags] = useState([]);

    useEffect(()=>{
        const promise = getHashtag();
        promise.then((answer)=>{
            const list = answer.data.map((data)=>
                <Link to={'/hashtag/'+data.name}>
                    <p>#{data.name}</p>
                </Link>
            );
            setListHashtags(list);
        });
        promise.catch(()=>{
          console.log("errp");
        });
      },[]);

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
