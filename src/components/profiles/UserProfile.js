import { useEffect } from 'react';
import Box from '@mui/material/Box';
import {Auth, API, Storage} from 'aws-amplify'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import * as queries from '../../graphql/queries';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Axios from 'axios'
import * as mutations from '../../graphql/mutations'

const Input = styled('input')({
    display: 'none',
  });


const UserProfile = ({setCurrentUser, currentUser}) => {
    
   

    useEffect(() => {
        getCurrentUser()
    },[])

    async function getCurrentUser() {
        const user = await Auth.currentAuthenticatedUser() 
        getUserFromTable(user)
    }

    async function getUserFromTable(user) {
        
        const loggedUser = await API.graphql({
            query: queries.getUsers,
            variables: {
                id: user.username
            }
        })
        setCurrentUser(loggedUser.data.getUsers)
    }

    function onChange(e) {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "wx39mwqk")

        Axios.post("https://api.cloudinary.com/v1_1/dsrwirbed/image/upload", formData)
        .then (res => {
            const new_photo = {
                id: currentUser.id,
                profile_picture: res.data.secure_url
            }
            API.graphql({
                query: mutations.updateUsers,
                variables: {
                    input: new_photo
                }
            })
        })
        // try {
        //     await Storage.put(file.name, file, {
        //         contentType: "image/png"
        //     });
        // } catch (error) {
        //     console.log("Error uploading file: ", error)
        // }
    }
    


    return (
        <Box
        sx={{
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            p: 1,
            overflowY: 'scroll',
            borderRadius: 1,
            position: 'absolute',
            zIndex: 'tooltip',
            height: '93vh',
            width: "100%",
            bgcolor:'lightblue'
        }}
        >
            <Box
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    display:"flex", 
                    width:'100%', 
                    height:'100%',
                    bgcolor:'lightgray'
                }}
            >
                <Box
                    sx={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}
                >
                    <Avatar style={{border: '5px solid lightgray'}} src="/broken-image.jpg" sx={{height: '400px', width: '400px'}}/>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onChange}/>
                        <Button variant="contained" component="span">
                        Upload Photo
                        </Button>
                    </label>
                </Box>
                <Box
                    sx={{
                        flexDirection: 'column',
                        pl:5,
                        bgcolor:'lightpink'
                    }}
                >

                    <Typography variant="h1" component="div" gutterBottom>
                        {currentUser?.name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {currentUser.email}
                    </Typography>
                </Box>
             
            </Box>
        </Box>
    )
    
}
export default UserProfile