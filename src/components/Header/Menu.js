import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { logout } from "../../services/linkr";
import { ButtonMenu, ButtonsContainer, MenuContainer } from "./HeaderStyle";

export default function MenuActions({ setMenu, token, logoutUser }) {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function logoutUser() {
        logout({ token })
            .catch((err) => console.error());
        setUser(null);
        sessionStorage.clear();
        navigate('/');
    }

    return (
        <MenuContainer onClick={ () => setMenu(false) } >
            <ButtonsContainer>
                <ButtonMenu>
                    <Link to={`/users/${user.userId}`} >
                        Profile
                    </Link>
                </ButtonMenu>
                
                <ButtonMenu onClick={ logoutUser }>Logout</ButtonMenu>
            </ButtonsContainer>
        </MenuContainer>
    );
}