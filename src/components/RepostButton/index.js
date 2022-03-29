import { useState } from "react"
import { deleteRepost, repost } from "../../services/linkr"
import Container from "./style"

export default function RepostButton({post}){
    const reposts = 1
    const [reposted, setReposted] = useState(false)
    const user = JSON.parse(sessionStorage.getItem('user'))
    const isDisabled = post.userId === user.userId ? true : false

    function handleClick(){
        if(reposted){
            const question = window.confirm('Do you want to undo the re-post ?')
            if (question) {
                deleteRepost(user.token, post.id).then(() => setReposted(false)).catch(err => { console.log(err.response) })
            }
        }else{
            const question = window.confirm('Do you want to re-post this link ?')
            if (question) {
                repost(user.token, post.id).then(() => setReposted(true)).catch(err => {console.log(err.response)})
            }
        }
    }

    return (
        <Container>
            <button
            onClick={handleClick}
            disabled={isDisabled}
            >
                REPOST
            </button>
            <span>{reposts}{reposts === 1 ? " re-post" : " re-posts"}</span>
        </Container>
    )
}