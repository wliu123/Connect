
import { Routes, Route, useSearchParams, useNavigate, Link, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react"
import Navbar from './components/navbar/Navbar'
import Landing from "./components/landing_page/Landing";
import Home from "./components/home/Home";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import Authorization from "./components/authorization/Authorization";
import SearchSpots from "./components/search_spots/SearchSpots";
import ChatsPage from "./components/chats/ChatsPage";
import UserProfile from "./components/profiles/UserProfile";




export function RequireAuth({ children }) {
  const location = useLocation();
  const { route } = useAuthenticator((context) => [context.route]);
  if (route !== 'authenticated') {
    return <Navigate to="/authorization" />;
  } 
  return children;
}

function App() {
  
  const [currentUser, setCurrentUser] = useState(null)
  
  
  

  return (
    
      <Authenticator.Provider>
      <Navbar currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/authorization" element={<Authorization/>} />
        <Route 
          path="/home" 
          element={
            <RequireAuth>

              <Home currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            </RequireAuth>
          } 
        />
        
        <Route path="/chats" element={<ChatsPage setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
        <Route path="/search_spots" element={<SearchSpots currentUser={currentUser}/>} />
        <Route path="/user_profile" element={<UserProfile setCurrentUser={setCurrentUser} currentUser = {currentUser}/>} />
      </Routes>
      </Authenticator.Provider>
    
  );
}

export default App;
