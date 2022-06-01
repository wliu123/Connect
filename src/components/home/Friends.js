import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {API} from 'aws-amplify'
import * as queries from '../../graphql/queries';
import Divider from '@material-ui/core/Divider';


const Friends = ({currentUser, friendsList, setFriendsList}) => {
  
  // MUI open menu box begin//
  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  // MUI open menu box end//

  useEffect(() => {
    if (currentUser) {
      listFriends()
    }
  }, [currentUser])

  async function listFriends() {
    console.log(currentUser)
    let filter = {
        followee: {
            contains: currentUser.email
        }
    }
    const listFriends = await API.graphql({
        query: queries.listFriends,
        variables: {filter: filter},
        authMode: "AMAZON_COGNITO_USER_POOLS"
    })
    
    setFriendsList(listFriends.data.listFriends.items)
}

    return (
        <List 
            dense 
            sx={{ 
                width: '100%', 
                minHeight: 250, 
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,  
                borderColor: 'text.primary',
                border: 1,
                borderRadius:1,
            }}
        >
        {friendsList.map((friend) => {
          
          return (
            <>
            <ListItem
              key={friend.name}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <AccountBoxIcon/>
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
          <Divider/>
            </>
          );
        })}
      </List>
    )
    
}
export default Friends