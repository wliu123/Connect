import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const Friends = () => {
    
    return (
        <List 
            dense 
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
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt="pics"
                    src="https://picsum.photos/id/101/367/267"
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary="each friend" />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    )
    
}
export default Friends