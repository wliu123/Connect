import {Hub, Auth, API, graphqlOperation} from 'aws-amplify'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Home = ({setCurrentUser}) => {
    const [value,setValue] = useState(new Date())
    const [suggestedUsers, setSuggestedUsers] = useState([])
    const [friendsList, setFriendsList] = useState([])
    const [listHangoutsByDate, setListHangoutsByDate] = useState([])
    
  
    useEffect(() => {
        getCurrentUser()
    },[])

    async function getCurrentUser() {
        const user = await Auth.currentAuthenticatedUser() 
        listUsers(user.attributes.email)
        listFriends()
        setCurrentUser(user)
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

    async function listFriends() {
        const listFriends = await API.graphql({
            query: queries.listFriends,
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        setFriendsList(listFriends.data.listFriends.items)
    }
    
    async function followFriend(user) {
        const friendDetail = {
            email: user.email,
            followedBy: false,
            following: true,
            name: user.name,
            profile_picture: user.profile_picture
        }
        await API.graphql({
            query: mutations.createFriends,
            variables: {
                input: friendDetail
            }
        })
    }
    
    
    
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
                        }}
                    />
                </LocalizationProvider>
               
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Upcoming Events
                </Typography>
                        <AttendingEvents/>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Friends
                </Typography>
                        <Friends friendsList={friendsList}/>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Groups
                </Typography>
                        <Groups />
            </Box>
          </Grid>
          <Grid item xs={9} md={9} lg={6}>
            <ListHangouts value={value} listHangoutsByDate={listHangoutsByDate} setListHangoutsByDate={setListHangoutsByDate}/>
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