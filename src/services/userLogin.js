import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function UserLoginValidation() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")));   
    }, [user]);

    // if (user === null) {
    //     // console.log('oi');
    //     navigate('/');
    //     return
    // }
    
    return {
        user,
    };
}

export {
    UserLoginValidation
}
