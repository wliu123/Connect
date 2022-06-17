import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {API} from 'aws-amplify'
import * as mutations from '../../graphql/mutations'
import * as queries from '../../graphql/queries';
import { useState, useEffect } from 'react';

const EachHangout = ({currentUser, hangout}) => {
    const [joined, setJoined] = useState(false)
    
    async function handleJoinEvent(hangout) {
        
        const updateJoined = await hangout.joined_by.push(currentUser.id)
        console.log(hangout)
        console.log(hangout.joined_by)
        console.log(updateJoined)
        const updateDetail = {
            id: hangout.id,
            joined_by: updateJoined
        }
        console.log(updateDetail)
        await API.graphql({
            query: mutations.updateHangouts,
            variables: {
                input: updateDetail
            }
        })
        setJoined(true)
    }

    useEffect(() => {
        didJoin(hangout)
    }, [])

    async function didJoin(hangout) {
        console.log(hangout)
        const joined = await API.graphql({
            query: queries.getHangouts,
            variables: {
                id: hangout.id
            }
        })
        const results = await joined.data.getHangouts
        console.log(results)
        if (results.joined_by.includes(currentUser.id)) {
            setJoined(true)
        } 
    }

    return (
        <ListItem key={hangout.id}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper', border:1, borderRadius: '16px' }}>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h5" component="div">
                        {hangout.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="body2" fontStyle={'italic'} component="div">
                        {hangout.created_by}
                        </Typography>
                    </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                    {hangout.location}
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1">
                    {hangout.description}
                    </Typography>
                </Box>
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    {
                        joined 
                        ?
                        <Button disable>Joined</Button>
                        :
                        <Button onClick={()=>handleJoinEvent(hangout)}>Join event</Button>
                    }
                </Box>
            </Box>
        </ListItem>
    )
    
}
export default EachHangout