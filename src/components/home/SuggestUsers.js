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
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import IconButton from '@mui/material/IconButton';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

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
    const [toggle, setToggle] = useState(false)

    const filteredUsers = suggestedUsers.filter(suggest => {
        const friendEmails = friendsList.map(friend => friend.email)
        return !friendEmails.find(friendEmail => friendEmail === suggest.email)
    })


    return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {filteredUsers.map((userStranger) => {
        
        return (
          <ListItem
            key={userStranger.name}
            secondaryAction={
              toggle
              ?
              <VerifiedUserIcon/>
              :
              <IconButton edge="end" aria-label="follow friend" onClick={()=> {
                  followFriend(userStranger)
                  setToggle(true)
                }}>
              <PersonAddAltIcon/>
              </IconButton>
            }
            disablePadding
          >
              <Box sx={{ flexGrow: 0 }}>
                <ListItemButton onClick={handleOpenUserMenu}>
                <ListItemAvatar>
                    <Avatar
                    src={userStranger.profile_picture}
                    />
                </ListItemAvatar>
                <ListItemText primary={userStranger.name}  />
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