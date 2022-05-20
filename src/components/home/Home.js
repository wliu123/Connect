import {Hub, Auth, API} from 'aws-amplify'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries';
const Home = () => {

        // useEffect(()=>{
      
    //     Hub.listen('auth', (data) => {
    //         switch (data.payload.event) {
    //             case 'signIn':
    //                 console.log('user signed in');
    //                 // createUser()
    //                 break;
    //             case 'signUp':
    //                 console.log('user is signing up')
    //                 break;
    //             case 'signOut':
    //                 console.log('user signed out');
    //                     break;
    //             case 'signIn_failure':
    //                 console.log('user sign in failed');
    //         }
    //     })
        
              
        
    // },[])

    // async function createUser() {
    //     const user = await Auth.currentAuthenticatedUser()
    //     createdUser(user)
    // }
    // async function createdUser(user) {

    //     await API.graphql({
    //         query: mutations.createUsers,
    //         variables: {
    //             input: {
    //                 email: user.attributes.email,
    //                 name: user.attributes.name
    //             }
    //         }
    //     })
    // }

    // async function checkUser() {
    //     const user = await Auth.currentAuthenticatedUser()
    //     console.log({user})

    //     // mutation MyMutation {
    //     //     createUsers(input: {email: "williamliu626@gmail.com", name: "William Liu", profile_picture: "https://picsum.photos/id/10/367/267"}) {
    //     //       id
    //     //       email
    //     //       name
    //     //       profile_picture
    //     //     }
    //     //   }
          
    // }

    // query MyQuery {
    //     listUsers {
    //       items {
    //         email
    //         id
    //         name
    //         profile_picture
    //       }
    //     }
    //   }
    
    return (

        <p> Home page</p>
    )
    
}
export default Home