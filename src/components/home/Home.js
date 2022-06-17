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
import SuggestUsers from './SuggestUsers';
import ListHangouts from './ListHangouts';
import { useSearchParams } from 'react-router-dom';
import FilterHangout from './FilterHangout';


const Home = ({currentUser}) => {
    const [value,setValue] = useState(false)
    const [suggestedUsers, setSuggestedUsers] = useState([])
    const [friendsList, setFriendsList] = useState([])
    const [dateRange, setDateRange] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    
    useEffect(() => {
        listUsers(currentUser)
    },[])

    useEffect(() => {
        const ranges = Array.from({length: 20}, (x, i) => i)
        const getDate = value => (relative = 0) => {
            let newDate = value ? new Date(value) : new Date();
            newDate.setDate(newDate.getDate() + relative);
            return newDate
        }
        const getDates = (value, offsets=[0]) => {
            const getDateOffset = getDate(value);
            return offsets.map((offset, index) => {
                const offSetDate = getDateOffset(offset)
                return {
                    id: index,
                    date: offSetDate.toDateString()
                }
            })
        }
        const state = {
            dates: getDates(value, ranges)
        }
        console.log(state)
        setDateRange([state])
    },[])

    async function listUsers(currentUser) {
        let filter = {
            email: {
                notContains: currentUser.email
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
            followee: currentUser.email,
            followersCount: userStranger.followersCount,
            followingCount: userStranger.folloingCount
        }
        await API.graphql({
            query: mutations.createFriends,
            variables: {
                input: friendDetail
            }
        })
    }
    
    return (
        
        <Grid container sx={{height: '3vh'}}>

    <Box sx={{ flexGrow: 1, px: 10, mt: 2, }}>
        
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
                        onChange={(newValue) => {
                            setValue(newValue)
                            setSearchParams({date: newValue})               
                        }}
                    />
                </LocalizationProvider>
               
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    My Events
                </Typography>
                        <AttendingEvents currentUser={currentUser} />
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Friends
                </Typography>
                        <Friends currentUser={currentUser} setFriendsList={setFriendsList} friendsList={friendsList}/>
                
            </Box>
          </Grid>
          <Grid item xs={9} md={9} lg={6}>
            {
                value
                ?
                <FilterHangout searchParams={searchParams}/>
                :
                <ListHangouts currentUser={currentUser} dateRange={dateRange} />
            }
          </Grid>
          <Grid item xs={9} md={9} lg={3}>
                <Box
                sx={{
                    maxHeight:800,
                    overflowY:'scroll'
                }}
                >
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    Suggested Users
                </Typography>

                <SuggestUsers friendsList={friendsList} followFriend={followFriend} suggestedUsers={suggestedUsers}/>
                </Box>
          </Grid>
        </Grid>
    </Box>
        </Grid>
    )
    
}
export default Home