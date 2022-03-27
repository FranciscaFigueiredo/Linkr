import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLoginValidation() {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")))
    
    const navigate = useNavigate();

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")))
    }, [user] );

    if (!user) {
        navigate('/');
    }
    
    return {
        user,
    };
}

export {
    UserLoginValidation
}
