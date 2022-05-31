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

const FriendList = ({selectedValue, open, onClose, activeFriend, friendsChat, currentUser, setActiveFriend}) => {
    
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
    
    return (
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Start a conversation</DialogTitle>
            <List sx={{ pt: 0 }}>
        {friendsChat.map((eachFriend) => {
          
            return (
                <>
                 <ListItem button onClick={() => handleListItemClick(eachFriend)} key={eachFriend.email}>
                    <ListItemAvatar>
                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                        <PersonIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={eachFriend.name} />
                </ListItem>
                
                </>
            )
        })}
            </List>
        </Dialog>
       
    )
    
}
export default FriendList