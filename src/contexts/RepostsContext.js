import { createContext } from 'react';
import { useState } from 'react';

const RepostsContext = createContext();

export function RepostProvider({ children }) {
    const [reposts, setReposts] = useState([])
    const [myRepost, setMyRepost] = useState(null)
    const [modal, setModal] = useState(false)
    
        return (
            <RepostsContext.Provider value={{ reposts, setReposts, myRepost, setMyRepost, modal, setModal }}>
            {children}
        </RepostsContext.Provider>
    );
}

export default RepostsContext;