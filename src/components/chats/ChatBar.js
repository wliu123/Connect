import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import * as mutations from '../../graphql/mutations'
import { useState } from 'react';
import {API} from 'aws-amplify'
import Box from '@material-ui/core/Box';

const ChatBar = ({activeFriend, currentUser}) => {
   
    const [messageBody, setMessageBody] = useState("")
    const handleChange = (e) => {
        setMessageBody(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()
        
        const bodyDetail = {
            channelID: activeFriend.id, 
            author: currentUser.id,
            body: messageBody.trim()
        }
        try {
            setMessageBody('')
            await API.graphql({
                query: mutations.createMessage,
                variables:{
                    input: bodyDetail
                }
            })
        } catch (error) {
            console.warn(error)
        }
    }
    
    return (
        
        <>
        <Grid item xs={1}>
            <Avatar alt="Cindy Baker" src={currentUser.profile_picture} />
        </Grid>
        <Grid item xs={10}>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >

            <TextField value={messageBody} onChange={handleChange}id="outlined-basic-email" label="Type Something" fullWidth /> 
            </Box>
        </Grid>
        <Grid xs={1} align="center" justifyContent='center'>
            <IconButton edge="end" aria-label="send message" onClick={handleSubmit}>
            <SendIcon />
            </IconButton>
        </Grid>
        </>
    )
    
}
export default ChatBar