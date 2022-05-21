import {Hub, Auth, API} from 'aws-amplify'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import AttendingEvents from './AttendingEvents';
import Typography from '@mui/material/Typography';
import Friends from './Friends';
import Groups from './Groups';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home = () => {
    const [value,setValue] = useState(new Date())
   
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
        

    <Box sx={{ flexGrow: 1, px: 10, mt: 2 }}>
        
        <Grid container spacing={2} columns={12}>
          <Grid item xs={3} md={3} lg={4}>
            <Box
            sx={{
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                
            }}
            >
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <CalendarPicker 
                        
                        value={value} 
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                    />
                </LocalizationProvider>
                </Box>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Upcoming Events
                </Typography>
                        <AttendingEvents/>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Friends
                </Typography>
                        <Friends />
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Groups
                </Typography>
                        <Groups />
         
          </Grid>
          <Grid item xs={9} md={9} lg={8}>
            <Item>xs=6</Item>
          </Grid>
        </Grid>
    </Box>
    )
    
}
export default Home