import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function UserLoginValidation() {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate('/');
        }
    }, []);    
    
    return {
        user,
    };
}

export {
    UserLoginValidation
}
