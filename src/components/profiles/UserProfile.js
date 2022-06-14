import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import {Auth, API, Storage} from 'aws-amplify'
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Axios from 'axios'
import * as mutations from '../../graphql/mutations'
import "../../App.css"
import Grid from '@mui/material/Grid';
import EditProfile from './EditProfile';
import ListEvents from './ListEvents';
import * as queries from '../../graphql/queries';
import Bio from './Bio';



const Input = styled('input')({
    display: 'none',
  });


const UserProfile = ({setCurrentUser, currentUser}) => {
    console.log(currentUser)
    const [editProfile, setEditProfile] = useState(false)
    const [createdEvents, setCreatedEvents] = useState([])

    useEffect(() => {
        listAllEvents()
    }, [])
    
    async function listAllEvents() {
        let filter = {
            created_by: {
                contains: currentUser.email
            }
        }
        const listEvents = await API.graphql({
            query: queries.listHangouts,
            variables: {filter: filter}
        })
        setCreatedEvents(listEvents.data.listHangouts.items)
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
    
    const handleProfileOpen = () => {
        setEditProfile(true);
      };

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
           
            height: '93vh',
            width: "100%",
           
            
        }}
        >
            <Grid container direction='columns' columns={12} sx={{height:500}}>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display:"flex", 
                            width:'100%', 
                            height:'100%',
                           
                        }}
                    >
                        <Box
                            sx={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                pb:3
                            }}
                        >
                            <Avatar style={{border: '5px solid lightgray'}} src={currentUser.profile_picture} sx={{height: '400px', width: '400px'}}/>
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
                               
                            }}
                        >

                            <Typography variant="h1" component="div" gutterBottom>
                                {currentUser.name}
                            </Typography>
                            <Typography variant="h6" gutterBottom component="div">
                                {currentUser.email}
                            </Typography>
                        </Box>
                    
                    </Box>
                </Grid>
            </Grid>
            <Grid container direction='columns' columns={12} sx={{height:100}}>
                <Box
                    sx={{
                       
                       borderTop: "1px solid",
                       borderBottom: "1px solid",
                        display:"flex", 
                        width:'100%',
                        py:2,
                        alignContent:'center',
                        justifyContent:'center'
                    }}
                >
                    <Box
                    sx={{
                      
                        alignItems: 'left',
                        justifyContent: 'left',
                        textAlign: 'left',
                        width: '25%'
                    }}
                    >
                        <Typography variant="h5" className="header-message">Follower Count: {currentUser.followersCount}</Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '25%'
                        }}
                    >
                        <Typography variant="h5" className="header-message">Followed Count: {currentUser.followingCount}</Typography>

                    </Box>
                    <Box
                    sx={{
                        
                        alignSelf: 'right',
                       flexDirection:'row',
                       pl: 45
                    }}
                    >
                    <Button onClick={handleProfileOpen}variant='contained' sx={{textAlign: 'center'}}>Edit Profile</Button>
                    </Box>
                </Box>
            </Grid>
            <EditProfile currentUser={currentUser} editProfile={editProfile} setEditProfile={setEditProfile}/>
            <Grid container direction='columns' spacing={{xs:2}} columns={12} sx={{height:400}}>
                <Grid item xs={4} sx={{paddingTop:3}}>
                <ListEvents createdEvents={createdEvents} currentUser={currentUser}/>
                </Grid>
                <Grid item xs={4}>
                <Bio currentUser={currentUser}/>
                </Grid>
                <Grid item xs={4}>
                <div>HelloWorld</div>    
                </Grid>
            </Grid>
        </Box>
    )
    
}
export default UserProfile