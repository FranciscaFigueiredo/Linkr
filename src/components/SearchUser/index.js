import {
  Container,
  HeaderStyle,
  BodyStyle,
  User,
  Search,
} from './style';
import {DebounceInput} from 'react-debounce-input';
import { useEffect, useState } from "react";
import { getFollows, getUserByText } from "../../services/linkr";
import { Link } from 'react-router-dom';

export default function SearchUser(){
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const user = JSON.parse(sessionStorage.getItem('user'))
  const spans = <><span className='dot'>•</span><span> following</span></>
  const [follows, setFollows] = useState([]);

  useEffect(() => {
    const promise = getFollows(user.token)
    promise.then(res => setFollows(res.data))
    promise.catch(res => console.log(res.response))
  },[])
    
  const list = users.map((data)=>{
    const isFollower = follows.find(v => v.followed_id === data.id);
    return (
    <Link to={`/users/${data.id}`} key={data.id} onClick={() => setSearch('')}>
      <User>
        <img src={data.picture_url} alt='username'/>
        <p>{data.username} {isFollower && spans}</p>
      </User>
    </Link>
  )});
  
  return (
    <Container>
      <HeaderStyle>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          value = {search}
          onChange={event => {
            setSearch(event.target.value);
            getUserByText(event.target.value, user.userId)
            .then((answer)=> setUsers(answer.data))
            .catch(()=> alert("erro"));
          }}
          placeholder='Search for people'
          />
        <Search/>
      </HeaderStyle>
      <BodyStyle>
        {search ? list : ''}
      </BodyStyle>
    </Container>
  );
}
