import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import "./chat.css"
import { API } from "aws-amplify";
import * as mutations from '../../graphql/mutations'
import { useEffect } from 'react';

const FriendList = ({selectedValue, setFriendsChat, open, onClose, openChats, activeFriend, friendsChat, currentUser, setActiveFriend}) => {
  
    const handleClose = (value) => {
        
        onClose([
            ...selectedValue,
            value
        ]);
      };
    
      const handleListItemClick = (value) => {
        onClose([
            ...selectedValue,
            value
        ]);
        createNewChannel(value)
      };

      async function createNewChannel(value) {
        let channelDetail = {
            chosen: value.email,
            chosen_name: value.name,
            chosen_picture: value.profile_picture,
            creator: currentUser.email
        }
        await API.graphql({
            query: mutations.createChannel,
            variables: {
                input: channelDetail
            },
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
      }

        const filteredFriends = friendsChat.filter((chat) => {
          return !openChats.find(openChat => chat.email === openChat.chosen)
        })
        
    return (
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Start a conversation</DialogTitle>
            <List sx={{ pt: 0 }}>
        {
            !friendsChat.length>0
            ?
            <div>Loading...</div>
            :
            filteredFriends?.map((eachFriend) => {
          
                return (
                    <>
                     <ListItem button onClick={() => handleListItemClick(eachFriend)} key={eachFriend?.email}>
                        <ListItemAvatar>
                        <Avatar alt="profile photo" src={eachFriend?.profile_picture} />
                        </ListItemAvatar>
                        <ListItemText primary={eachFriend?.name} />
                    </ListItem>
                    
                    </>
                )
            })
        }
            </List>
        </Dialog>
       
    )
    
}
export default FriendList