import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { logout } from "../../services/linkr";
import { ButtonMenu, MenuContainer } from "./HeaderStyle";


export default function MenuActions({ setMenu, token }) {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    function logoutUser() {
        logout({ token })
            .catch((err) => console.error());
        setUser(null)
        sessionStorage.clear()
        // window.location.reload()
        navigate('/')
    }

    return (
        <MenuContainer onClick={ () => setMenu(false) } >
            <ButtonMenu onClick={ logoutUser }>Logout</ButtonMenu>
        </MenuContainer>
    );
}