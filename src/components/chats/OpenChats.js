import { useEffect } from "react"
import {API, Auth} from 'aws-amplify'
import * as queries from '../../graphql/queries';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
const OpenChats = ({activeFriend, currentUser, chat, setActiveFriend}) => {
    
    // useEffect(() => {
    //     getOpenChannels()
    // }, [])

    // async function getOpenChannels() {
    //     console.log(currentUser)
    //     let filter = {
    //         creator: {
    //             contains: currentUser.username
    //         }
    //     }
    //     const openChats = await API.graphql({
    //         query: queries.listChannels,
    //         variables: {filter: filter},
    //         authMode: "AMAZON_COGNITO_USER_POOLS"
    //     })
    //     setOpenChats(openChats.data.listChannels.items)
    // }

    return (
        // <>
        // <ListItem button onClick={() => console.log("Clicked")}>
        // <ListItemIcon>
        //     <Avatar alt="profile photo" src={chat.chosen_picture} />
        //     </ListItemIcon>
        //     <ListItemText primary={chat.chosen_name}></ListItemText>
        // </ListItem>
        // </>
        <div className={`app-sidebar-friend ${chat === activeFriend && "active"}`} onClick={() => setActiveFriend(chat)}>
        <ListItem>

        <ListItemIcon>
            <Avatar alt="profile photo" src={chat.chosen_picture} />
            </ListItemIcon>
            <ListItemText primary={chat.chosen_name}></ListItemText>
        </ListItem>
        

        </div>
    )
    
}
export default OpenChats