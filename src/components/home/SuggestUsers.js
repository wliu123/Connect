import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const SuggestUsers = ({friendsList, suggestedUsers, followFriend}) => {
    
    // MUI open menu box begin//
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    // MUI open menu box end//

    const filteredUsers = suggestedUsers.filter(suggest => {
        const friendEmails = friendsList.map(friend => friend.email)
        return !friendEmails.find(friendEmail => friendEmail === suggest.email)
    })


    return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {filteredUsers.map((user) => {
        
        return (
          <ListItem
            key={user.name}
            secondaryAction={
              <Button onClick={() => followFriend(user)}>Follow</Button>
            }
            disablePadding
          >
              <Box sx={{ flexGrow: 0 }}>
                <ListItemButton onClick={handleOpenUserMenu}>
                <ListItemAvatar>
                    <Avatar
                    src={user.profile_picture}
                    />
                </ListItemAvatar>
                <ListItemText primary={user.name} secondary={user.email} />
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
export default SuggestUsers