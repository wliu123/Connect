import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const ChosenChat = ({chosenChats, openChats, activeFriend, setActiveFriend}) => {
    
    const filterChats = chosenChats.filter(chats => {
        return !openChats.find(openChat => openChat.email === chats.email)
    })
    return (
        <>
        {filterChats?.map(chat => {
            return (
                <div className={`app-sidebar-friend ${chat === activeFriend && "active"}`} onClick={() => setActiveFriend(chat)}>
                <ListItem>
        
                <ListItemIcon>
                    <Avatar alt="profile photo" src={chat.chosen_picture} />
                    </ListItemIcon>
                    <ListItemText primary={chat.chosen_name}></ListItemText>
                </ListItem>
                
        
                </div>

            )
        })}
        </>
    )
    
}
export default ChosenChat