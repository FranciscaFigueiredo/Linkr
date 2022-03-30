import { useContext } from "react"
import {Container} from "./style"
import repostImg from "../../../assets/repost.svg"
import RepostsContext from "../../../contexts/RepostsContext"
import RepostModal from "./Modal"

export default function RepostButton({post}){
    const { reposts, myRepost, setModal } = useContext(RepostsContext)
    const user = JSON.parse(sessionStorage.getItem('user'))
    const isDisabled = post.userId === user.userId || myRepost === null ? true : false

    return (
            <Container isDisabled={isDisabled}>
                <button
                onClick={() => setModal(true)}
                disabled={isDisabled}
                >
                    <img src={repostImg} alt="repost" />
                </button>
                <RepostModal post={post} />
                <span>{reposts.length}{reposts.length === 1 ? " re-post" : " re-posts"}</span>
            </Container>
    )
}