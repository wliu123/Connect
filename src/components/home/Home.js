import {Auth, API} from 'aws-amplify'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState, useEffect } from 'react';
import AttendingEvents from './AttendingEvents';
import Typography from '@mui/material/Typography';
import Friends from './Friends';
import Groups from './Groups';
import SuggestUsers from './SuggestUsers';
import ListHangouts from './ListHangouts';


const Home = ({setCurrentUser, currentUser}) => {
    const [value,setValue] = useState(new Date())
    const [suggestedUsers, setSuggestedUsers] = useState([])
    const [friendsList, setFriendsList] = useState([])
    const [dateRange, setDateRange] = useState([])
    
    
  
    useEffect(() => {
        getCurrentUser()
    },[])

    async function getCurrentUser() {
        const user = await Auth.currentAuthenticatedUser() 
        getUserFromTable(user)
        listUsers(user.attributes.email)
        
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

    async function listUsers(email) {
        let filter = {
            email: {
                notContains: email
            }
        }
        const listAll = await API.graphql({
            query: queries.listUsers,
            variables: {filter: filter}
        })
        const res = await listAll.data.listUsers.items
        setSuggestedUsers(res)
       
    }

    
    
    async function followFriend(userStranger) {
        
        const friendDetail = {
            email: userStranger.email,
            followedBy: false,
            following: true,
            name: userStranger.name,
            profile_picture: userStranger.profile_picture,
            followee: currentUser.email
        }
        await API.graphql({
            query: mutations.createFriends,
            variables: {
                input: friendDetail
            }
        })
    }
    // trying to get calendar to filter hangouts shown!!! use querysearch params to filter the state?

    // useEffect(() => {
    //     console.log("This is changing")
    //     const filtered = dateRange[0].dates.filter((date)=>{
    //         console.log(date.date)
    //         return value.toDateString() === date.date
    //     })
    //     console.log(filtered)
    // }, [value])

    // async function filterDate (newValue) {
    //     if (value !== newValue) {
    //         const filtered = await dateRange[0].dates.filter((date)=>{
    //             console.log(date.date)
    //             return value.toDateString() === date.date
    //         })
    //         console.log(filtered)
    //     }
    // }
    
    // trying to get calendar to filter hangouts shown!!!
    
    return (
        

    <Box sx={{ flexGrow: 1, px: 10, mt: 2 }}>
        
        <Grid container spacing={2} columns={12}>
          <Grid item xs={3} md={3} lg={3}>
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
                            // trying to get calendar to filter hangouts shown!!!

                            // filterDate(newValue)
                                // if (value !== newValue) {

                                //     const filtered = dateRange[0].dates.filter((date)=>{
                                //         console.log(date.date)
                                //         return value.toDateString() === date.date
                                //     })
                                //     console.log(filtered)
                                // }
                            
                            // trying to get calendar to filter hangouts shown!!!
                        
                        }}
                    />
                </LocalizationProvider>
               
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Upcoming Events
                </Typography>
                        <AttendingEvents currentUser={currentUser} />
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Friends
                </Typography>
                        <Friends currentUser={currentUser} setFriendsList={setFriendsList} friendsList={friendsList}/>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Groups
                </Typography>
                        <Groups />
            </Box>
          </Grid>
          <Grid item xs={9} md={9} lg={6}>
            <ListHangouts dateRange={dateRange} setDateRange={setDateRange} value={value} />
          </Grid>
          <Grid item xs={9} md={9} lg={3}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                Suggested Users
            </Typography>
            <SuggestUsers friendsList={friendsList} followFriend={followFriend} suggestedUsers={suggestedUsers}/>
          </Grid>
        </Grid>
    </Box>
    )
    
}
export default Home