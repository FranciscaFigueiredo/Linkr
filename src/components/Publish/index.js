import {useState, useContext} from "react";
import UserContext from "../../contexts/UserContext";
import { postPublish } from "../../services/linkr";
import Container from "./style";

export default function Publish(){
    const [link, setLink] = useState('')
    const [comment, setComment] = useState('')
    const [isLoading, setIsLoading] = useState(0)
    const {token} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(1)
        postPublish({link, comment}, token).then(() => {
            setLink('')
            setComment('')
        }).catch(() => {
            alert('Houve um erro ao publicar seu link')
        }).finally(() => {setIsLoading(0)})
    }
    return (
        <Container>
            <div className="image">
                <img src="https://unsplash.it/144/87" alt="Profile" />
            </div>

            <form onSubmit={handleSubmit}>
                    <h1>What are you going to share today?</h1>
                <input type="url"
                placeholder="http://"
                required
                value={link}
                        onChange={e => setLink(e.target.value)}
                        disabled={isLoading === 1 ? true : false}
                />
                <textarea type="text"
                        placeholder="Awesome article about #javascript"
                        value={comment}
                        onChange={e => setComment( e.target.value )}
                        disabled={isLoading === 1 ? true : false}
                        className='comment'
                />
                <button disabled={isLoading === 1 ? true : false}>
                    {isLoading === 0 ? 'Publish' : 'Publishing'}
                </button>
            </form>

        </Container>
    )
}