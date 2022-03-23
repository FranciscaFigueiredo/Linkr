import { useEffect, useState } from "react";
import { UserLoginValidation } from "../../services/userLogin";
import { ArrowMenu, Avatar, Menu, Navbar, Title } from "./HeaderStyle";
import MenuActions from "./Menu";

export default function Header() {
    const user = UserLoginValidation();
    const { pictureUrl } = user;

    const [menu, setMenu] = useState(false);

    useEffect(()=> {
    }, [menu]);

    console.log(menu);
    return (
        <>
            <Navbar>
                <Title>Linkr</Title>
                <Menu onClick={ () => setMenu(!menu) }>
                    <ArrowMenu menu={ menu } />
                    <Avatar src={ pictureUrl } alt="" />
                </Menu>
            </Navbar>
            {
                menu ?
                    <MenuActions />
                : ''
            }
        </>
    );
}