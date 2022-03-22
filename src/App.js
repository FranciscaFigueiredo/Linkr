import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import UserContext from "./contexts/UserContext";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import GlobalStyle from "./styles/GlobalStyle";
import Hashtag from "./pages/Hashtag";

function App() {
    const [ user, setUser ] = useState(null);
    const [ token, setToken ] = useState(null);

    return (
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={{user, setUser, token, setToken}} >
                <Routes>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/hashtag/:hashtag" element={<Hashtag/>}/>
                </Routes>
            </UserContext.Provider>
      </BrowserRouter>   
    );
}

export default App;
