import { makeStyles } from '@material-ui/core/styles';
import Paper from '@mui/material/Paper'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { useState, useEffect } from 'react';
import ChatBar from './ChatBar';
import {API, Auth} from 'aws-amplify'
import * as queries from '../../graphql/queries';
import FriendList from './FriendList';
import "./chat.css"
import Messages from './Messages';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import OpenChats from './OpenChats';
import ChosenChat from './ChosenChat';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    chatSection: {
      width: '100%',
      height: '85vh'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
      height: '76vh',
      overflowY: 'auto'
    }
  });

const ChatsPage = ({setCurrentUser, currentUser}) => {

    const [messages, setMessages] = useState("")
    const [friendsChat, setFriendsChat] = useState([])
    const [activeFriend, setActiveFriend] = useState(false)
    const [openChats, setOpenChats] = useState([])
    const [chosenChats, setChosenChats] = useState([])
    // dialog box for friends chatroom
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    // dialog for chatsroom end
    
    const classes = useStyles()
    // get user Info begin
    useEffect(() => {
        if (!currentUser) {

            getCurrentUser()
        }
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
    // get user Info end

    useEffect(() => {
        if (currentUser) {

            getCurrentFriends()
        }
    },[currentUser])

    useEffect(() => {
        if (currentUser) {

            getOpenChannels()
            getOpenChannelsTwo()
        }
    }, [])

    // useEffect(() => {
    //     if (currentUser) {

    //         getOpenChannels()
    //     }
    // }, [])

    async function getCurrentFriends() {
        let filter = {
            followee: {
                contains: currentUser.email
            }
        }
        const listFriends = await API.graphql({
            query: queries.listFriends,
            variables: {filter: filter},
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        
        setFriendsChat(listFriends.data.listFriends.items)
    }
    async function getOpenChannels() {
        
        let filter = {
            creator: {
                contains: currentUser.email
            }
        }
        console.log(filter)
        const openChats = await API.graphql({
            query: queries.listChannels,
            variables: {filter: filter},
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        
        setOpenChats(openChats.data.listChannels.items)
    }

    async function getOpenChannelsTwo() {
        let filter = {
            chosen: {
                contains: currentUser.email
            }
        }
        
        const chosenChat = await API.graphql({
            query: queries.listChannels,
            variables: {filter: filter},
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        
        setChosenChats(chosenChat.data.listChannels.items)
    }

    // async function getOpenChannels() {
    //     let filter = {
    //         creator: {
    //             contains: currentUser.username
    //         }
    //     }
    //     const openChats = API.graphql({
    //         query: queries.listChannels,
    //         variables: {filter: filter},
    //         authMode: "AMAZON_COGNITO_USER_POOLS"
    //     })
    //     console.log(openChats)
    //     setOpenChats(openChats.data.listChannels.items)
    // }

    // const clickCreateChat = (activeFriend) => {
    //     console.log(activeFriend)
    //     if (activeFriend && !messages) {
    //         // createChat(activeFriend)
    //         console.log("Hello")
    //     }
    // }

    // async function createChat(activeFriend) {

    // }

    

    return (
        <Box
            sx={{
                px: 20
            }}
        >

        <Grid container >
            <Grid item xs={12} >
                <Typography variant="h5" className="header-message">Chat</Typography>
            </Grid>
        </Grid>
        <Grid container component={Paper} className={classes.chatSection}>
            <Grid item xs={3} className={classes.borderRight500}>
                <List>
                    <ListItem key="RemySharp">
                        <ListItemIcon>
                        <Avatar alt="Remy Sharp" src={currentUser.profile_picture} />
                        </ListItemIcon>
                        <ListItemText primary={currentUser.name}></ListItemText>
                        <Fab size="small" color="info" aria-label="add" onClick={handleClickOpen}>
                            <AddIcon />
                        </Fab>
                        <FriendList selectedValue={selectedValue} onClose={handleClose} open={open} activeFriend={activeFriend} setActiveFriend={setActiveFriend} currentUser={currentUser} friendsChat={friendsChat}/>
                    </ListItem>
                </List>
                <Divider />
                <Grid item xs={12} m={12} lg={12} style={{padding: '10px'}}>
                    {/* search using autocomplete list of friends, when click on friend, create a new channelID */}
                    <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth />
                </Grid>
                <Divider />
                <div className='app-sidebar-friend'>

                    {/* this needs to list channelID's and not just friends.  */}
                    {/* {!friendsChat.length>0 ? <div>Loading...</div> : <FriendList activeFriend={activeFriend} setActiveFriend={setActiveFriend} currentUser={currentUser} friendsChat={friendsChat}/>} */}
                    {!openChats.length > 0
                        ?
                        null
                        :
                        <>
                        {openChats.map((chat) => {
                            return (
                                <OpenChats chat={chat} activeFriend={activeFriend} setActiveFriend={setActiveFriend}/>
                            )
                        })}
                        {chosenChats.map((chosen)=> {
                            return (
                                <ChosenChat chosen={chosen} activeFriend={activeFriend} setActiveFriend={setActiveFriend}/>
                            )
                        })}
                        </>
                    }
                </div>
                
            </Grid>
            <Grid item xs={9}>
                <List className={classes.messageArea}>
                <div className="messages-scroller">
                    <Messages activeFriend={activeFriend} currentUser={currentUser} messages={messages} setMessages={setMessages}/>
                </div>

                </List>
                <Divider />
                <Grid container style={{padding: '5px'}}>
                    <ChatBar activeFriend={activeFriend} currentUser={currentUser} />
                </Grid>
            </Grid>
        </Grid>
        </Box>
    )
    
}
{/* <ListItem key="1">
    <Grid container>
        <Grid item xs={12}>
            <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
        </Grid>
        <Grid item xs={12}>
            <ListItemText align="right" secondary="09:30"></ListItemText>
        </Grid>
    </Grid>
</ListItem>
<ListItem key="2">
    <Grid container>
        <Grid item xs={12}>
            <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
        </Grid>
        <Grid item xs={12}>
            <ListItemText align="left" secondary="09:31"></ListItemText>
        </Grid>
    </Grid>
</ListItem>
<ListItem key="3">
    <Grid container>
        <Grid item xs={12}>
            <ListItemText align="right" primary="Cool. i am good, let's catch up!"></ListItemText>
        </Grid>
        <Grid item xs={12}>
            <ListItemText align="right" secondary="10:30"></ListItemText>
        </Grid>
    </Grid>
</ListItem> */}
export default ChatsPage