import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Posts from "../../components/Posts"
import Trending from "../../components/Trending"
import { getUserById } from "../../services/linkr"
import { TimelineContainer, TimelineParent } from "../Timeline/styles"


export default function UserTimeline(){
    const { id } = useParams()
    const [name, setName] = useState('')
    useEffect(()=>{
        const promise = getUserById(id)
        promise.then(res => {
            console.log(res.data.username);
            setName(res.data.username)
        }).catch(err => console.log(err.response.message));
    },[id])
    return(
        <>
            <Header />
            <TimelineContainer>
                <TimelineParent>
                    <span id='title'>{`${name}'s posts`}</span>
                    <Posts id={id} />
                </TimelineParent>
                <Trending />
            </TimelineContainer>
        </>
    )
}