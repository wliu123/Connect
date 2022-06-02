import { useState, useEffect } from "react"
import {Authenticator, useAuthenticator, View} from '@aws-amplify/ui-react'
import {Hub, Auth, API} from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import { useNavigate, useLocation } from 'react-router'
import './auth.css'

const Authorization = () => {
    const { route } = useAuthenticator((context) => [context.route]);
    const location = useLocation();
    const navigate = useNavigate();

    let from = location.state?.from?.pathname || '/';
    
    useEffect(() => {
        if (route === 'authenticated') {
            navigate("/home");
        }
    }, [route, navigate, from]);

    
    
    return (
    <View className="auth-wrapper">
        <div className="repage">

      <Authenticator variation="modal">
          
      </Authenticator>
        </div>
    </View>
        
    )
    
}
export default Authorization