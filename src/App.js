
import { Routes, Route, useSearchParams, useNavigate, Link, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react"
import Navbar from './components/navbar/Navbar'
import Landing from "./components/landing_page/Landing";
import Home from "./components/home/Home";
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import Authorization from "./components/authorization/Authorization";
import {Hub, Auth, API} from 'aws-amplify'

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
  

  // const loggedDisplay = (
  //   <>
  //   <Route path="/home" element={<Home />} />
  //   </>
  // )

  // const notLoggedDisplay = (
  //   <>
  //   <Route path="/" element={<Landing />} />
  //   </>
  // )

   useEffect(()=>{
      
        Hub.listen('auth', (data) => {
            switch (data.payload.event) {
                case 'authenticated':
                    console.log('user authenticated')
                    break;
                case 'signIn':
                    console.log('user signed in');
                    break;
                case 'signUp':
                    console.log('user is signing up')
                    break;
                case 'signOut':
                    console.log('user signed out');
                        break;
                case 'signIn_failure':
                    console.log('user sign in failed');
            }
        })
  },[])
  

  return (
    
      <Authenticator.Provider>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/authorization" element={<Authorization/>} />
        <Route 
          path="/home" 
          element={
            <RequireAuth>

              <Home />
            </RequireAuth>
          } 
        />
      </Routes>
      </Authenticator.Provider>
    
  );
}

export default App;
