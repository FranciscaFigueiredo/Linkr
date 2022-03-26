import { useState } from "react"
import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Posts from "../../components/Posts"
import Trending from "../../components/Trending"
import { TimelineContainer, TimelineParent } from "../Timeline/styles"


export default function User(){
    const { id } = useParams()
    const [name, setName] = useState('')
    return(
        <>
            <Header />
            <TimelineContainer>
                <TimelineParent>
                    <span id='title'>{`${name}'s posts`}</span>
                    <Posts id={id} setName={setName} />
                </TimelineParent>
                <Trending />
            </TimelineContainer>
        </>
    )
}