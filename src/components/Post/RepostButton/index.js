import { useContext, useState } from "react"
import { deleteRepost, repost } from "../../../services/linkr"
import Container from "./style"
import repostImg from "../../../assets/repost.svg"
import RepostsContext from "../../../contexts/RepostsContext"

export default function RepostButton({post}){
    const { reposts, myRepost, setMyRepost } = useContext(RepostsContext)
    const user = JSON.parse(sessionStorage.getItem('user'))
    const isDisabled = post.userId === user.userId || myRepost === null ? true : false

    function handleClick(){
        if(myRepost){
            const question = window.confirm('Do you want to undo the re-post ?')
            if (question) {
                deleteRepost(user.token, post.id).then(() => setMyRepost(false)).catch(err => { console.log(err.response) })
            }
        }else{
            const question = window.confirm('Do you want to re-post this link ?')
            if (question) {
                repost(user.token, post.id).then(() => setMyRepost(true)).catch(err => {console.log(err.response)})
            }
        }
    }

    return (
        <Container>
            <button
            onClick={handleClick}
            disabled={isDisabled}
            >
                <img src={repostImg} alt="repost" />
            </button>
            <span>{reposts.length}{reposts.length === 1 ? " re-post" : " re-posts"}</span>
        </Container>
    )
}