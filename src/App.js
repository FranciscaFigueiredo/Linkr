import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
    const [ user, setUser ] = useState(null);
    const [ token, setToken ] = useState(null);

    useEffect(() => {
        if (user === null) {
            setUser(JSON.parse(sessionStorage.getItem("user")));
        }
    }, [user, token]);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={{user, setUser, token, setToken}} >
                <Routes>
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/" element={<Login user={user} setUser={setUser} setToken={setToken} />} />
                </Routes>
            </UserContext.Provider>
      </BrowserRouter>   
    );
}

export default App;
