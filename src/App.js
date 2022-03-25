import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from "./contexts/UserContext";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import GlobalStyle from "./styles/GlobalStyle";
import Hashtag from "./pages/Hashtag";
import Timeline from './pages/Timeline/Timeline.js';


function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (user === null) {
      setUser(JSON.parse(sessionStorage.getItem('user')));
    }

    if (user) {
      setToken(user.token)
    }
  }, [user, token]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
        <Routes>
          <Route path='/sign-up' element={<SignUp />} />
          <Route
            path='/'
            element={
              <Login user={user} setUser={setUser} setToken={setToken} />
            }
          />
          <Route path='/timeline' element={<Timeline />} />
          <Route path="/hashtag/:hashtag" element={<Hashtag/>}/>
        </Routes>
      </UserContext.Provider>
      <ToastContainer />
    </BrowserRouter>
  );

}

export default App;
