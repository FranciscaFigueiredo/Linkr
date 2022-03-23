import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = styled.header`
	width: 100vw;
    height: 72px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	background-color: rgba(21, 21, 21, 1);
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

	margin: 0 auto 30px;
    padding: 0 30px 0 30px;

    position: relative;
`;

const Title = styled.h1`
    font-size: 65px;
	font-family: 'Passion One', cursive;
	font-weight: bold;
`;

const Menu = styled.div`
    display: flex;
	align-items: center;
	justify-content: space-between;

    font-size: 23px;
	font-weight: bold;
`;

const ArrowMenu = styled(IoIosArrowDown)`
    color: #ffffff;

    transform: ${(props) => props.menu ? "rotate(180deg)" : ""};

    cursor: pointer;

    margin: 0 15px;
`

const Avatar = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 50%;
`;

const ButtonMenu = styled.button`
    width: 150px;
    height: 45px;

    color: #ffffff;
    font-size: 17px;
    font-family: 'Lato', sans-serif;
    font-weight: bold;

    background-color: #171717;
    border-end-start-radius: 20px;

    position: absolute;
    right: 0;
    top: 72px;

    &:hover {
        background-color: #1877f2;
    }
`;

export {
    Navbar,
    Title,
	Menu,
    ArrowMenu,
    Avatar,
    ButtonMenu,
}
