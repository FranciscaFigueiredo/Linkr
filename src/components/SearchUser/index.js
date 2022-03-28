import {
  Container,
  HeaderStyle,
  BodyStyle,
  User,
  Search,
} from './style';
import {DebounceInput} from 'react-debounce-input';
import { useState } from "react";
import { getUserByText } from "../../services/linkr";
import { Link } from 'react-router-dom';

export default function SearchUser(){
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  const list = users.map((data)=>
    <Link to={`/users/${data.id}`} key={data.id} onClick={() => setSearch('')}>
      <User>
        <img src={data.picture_url} alt='username'/>
        <p>{data.username}</p>
      </User>
    </Link>
  );
  
  return (
    <Container>
      <HeaderStyle>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          value = {search}
          onChange={event => {
            setSearch(event.target.value);
            getUserByText(event.target.value)
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
