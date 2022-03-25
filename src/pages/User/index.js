import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import Posts from "../../components/Posts"
import Trending from "../../components/Trending"
import { TimelineContainer, TimelineParent } from "../Timeline/styles"


export default function User(){
    const { id } = useParams()
    return(
        <>
            <Header />
            <TimelineContainer>
                <TimelineParent>
                    <span id='title'>timeline</span>
                    <Posts id={id}/>
                </TimelineParent>
                <Trending />
            </TimelineContainer>
        </>
    )
}