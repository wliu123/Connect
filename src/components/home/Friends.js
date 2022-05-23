import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Friends = ({friendsList}) => {
  
  // MUI open menu box begin//
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  // MUI open menu box end//

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
        {friendsList.map((friend) => {
          
          return (
            <ListItem
              key={friend.name}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <CommentIcon />
                </IconButton>
              }
              disablePadding
            >
              <Box sx={{ flexGrow: 0 }}>
                <ListItemButton onClick={handleOpenUserMenu}>
                  <ListItemAvatar>
                    <Avatar
                      alt="pics"
                      src={friend.profile_picture}
                    />
                  </ListItemAvatar>
                  <ListItemText primary={friend.name} />
                </ListItemButton>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                      >
                      <MenuItem onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">View Profile</Typography>
                      </MenuItem>
                  </Menu>
              </Box>
            </ListItem>
            
          );
        })}
      </List>
    )
    
}
export default Friends