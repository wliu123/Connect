import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const ChosenChat = ({chosenChats, openChats, activeFriend, setActiveFriend}) => {
    
    // const filterChats = chosenChats.filter(chats => {
    //     return !openChats.find(openChat => openChat.email === chats.email)
    // })
    // console.log(filterChats)
    console.log(chosenChats)
    return (
        <>
        {chosenChats?.map(chat => {
            return (
                <div className={`app-sidebar-friend ${chat === activeFriend && "active"}`} onClick={() => setActiveFriend(chat)}>
                <ListItem>
        
                <ListItemIcon>
                    <Avatar alt="profile photo" src={chat.creator_picture} />
                    </ListItemIcon>
                    <ListItemText primary={chat.creator_name}></ListItemText>
                </ListItem>
                
        
                </div>

            )
        })}
        </>
    )
    
}
export default ChosenChat