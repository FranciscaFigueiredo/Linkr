import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import SearchUser from '../SearchUser';
import { ArrowMenu, Avatar, Menu, Navbar, Title } from './HeaderStyle';
import MenuActions from './Menu';

export default function Header() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();
  const [menu, setMenu] = useState(0);
  let pictureUrl = null;
  let token = null;

  useEffect(() => {
    if (user === null) {
      navigate('/');
      return '';
    }
  }, []);

  pictureUrl = user?.pictureUrl;
  token = user?.token;

  if (!user) {
    return '';
  }
  return (
    <>
      <Navbar>
        <Link to='/timeline'>
          <Title>Linkr</Title>
        </Link>
        <SearchUser />
        <Menu onClick={() => setMenu(!menu)}>
          <ArrowMenu menu={menu} />
          <Avatar src={pictureUrl} alt='' />
        </Menu>
      </Navbar>
      {menu ? (
        <MenuActions user={user.id} setMenu={setMenu} token={token} />
      ) : (
        ''
      )}
    </>
  );
}
