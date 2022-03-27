import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './contexts/UserContext';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import GlobalStyle from './styles/GlobalStyle';
import Hashtag from './pages/Hashtag';
import Timeline from './pages/Timeline/Timeline.js';
import { ModalProvider } from './contexts/ModalContext.js';
import { PostsProvider } from './contexts/PostsContext.js';
import UserTimeline from './pages/UserTimeline';

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  if (user === null && sessionStorage.getItem('user')) {
    setUser(JSON.parse(sessionStorage.getItem('user')));
    setToken(JSON.parse(sessionStorage.getItem('user')).token);
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser, token, setToken }}>
        <ModalProvider>
          <PostsProvider>
            <Routes>
              <Route path='/sign-up' element={<SignUp />} />
              <Route
                path='/'
                element={
                  <Login user={user} setUser={setUser} setToken={setToken} />
                }
              />
              <Route path='/timeline' element={<Timeline />} />
              <Route path='/hashtag/:hashtag' element={<Hashtag />} />
              <Route path='/users/:id' element={<UserTimeline />} />
            </Routes>
          </PostsProvider>
        </ModalProvider>
      </UserContext.Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
