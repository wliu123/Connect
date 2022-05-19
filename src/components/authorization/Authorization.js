import { useState, useEffect } from "react"
import {Authenticator, AmplifySignOut} from '@aws-amplify/ui-react'
import {Auth} from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
const Authorization = () => {
    // const [user, setUser] = useState(null)
    
    useEffect(()=>{
        checkUser()
        async function checkUser() {
            const user = await Auth.currentAuthenticatedUser()
            console.log({user})
        }
    },[])


    // if (!user) return null

    // console.log(user)
    return (
        <Authenticator variation="modal">
            {({signOut, user})=>(
                <>
                <h3>Username: {user.username}</h3>
                <p>Email: {user.attributes.email}</p>
                <button onClick={signOut}>Sign out</button>
                </>
            )
            }
            
        </Authenticator>
        
    )
    
}
export default Authorization