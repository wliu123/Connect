import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';


const sample = ["test", "test1", "test2"]
const Groups = () => {
    
    return (
        <List 
            sx={{ 
                width: '100%', 
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 120, 
                borderColor: 'text.primary',
                border: 1,
                borderRadius:1,
            }}
        >
              {sample.map((test) => (

                  <ListItem>
                  <ListItemAvatar>
                    <Avatar src='https://picsum.photos/id/1002/367/267'/>
                  </ListItemAvatar>
                  <ListItemText
                    primary={test}
                   
                  />
                </ListItem>
              )
              )}
        </List>
    )
    
}
export default Groups