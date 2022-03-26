import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserLoginValidation } from '../../services/userLogin';
import SearchUser from '../SearchUser';
import { ArrowMenu, Avatar, Menu, Navbar, Title } from './HeaderStyle';
import MenuActions from './Menu';

export default function Header() {
  const { user } = UserLoginValidation();

  const { pictureUrl, token } = user;

  const [menu, setMenu] = useState(false);

  useEffect(() => {}, [menu, user]);
  return (
    <>
      <Navbar>
        <Link to='/timeline'>
          <Title>Linkr</Title>
        </Link>
        <SearchUser/>
        <Menu onClick={() => setMenu(!menu)}>
          <ArrowMenu menu={menu} />
          <Avatar src={pictureUrl} alt='' />
        </Menu>
      </Navbar>
      {menu ? <MenuActions setMenu={setMenu} token={token} /> : ''}
    </>
  );
}

