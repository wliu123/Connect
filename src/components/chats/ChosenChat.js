import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const ChosenChat = ({activeFriend, chosen, setActiveFriend}) => {
    
    return (
        <div className={`app-sidebar-friend ${chosen === activeFriend && "active"}`} onClick={() => setActiveFriend(chosen)}>
        <ListItem>

        <ListItemIcon>
            <Avatar alt="profile photo" src={chosen.chosen_picture} />
            </ListItemIcon>
            <ListItemText primary={chosen.chosen_name}></ListItemText>
        </ListItem>
        

        </div>
    )
    
}
export default ChosenChat