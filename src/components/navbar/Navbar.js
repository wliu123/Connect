import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState, useTransition } from 'react';
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import {Authenticator, useAuthenticator} from '@aws-amplify/ui-react'
import {Hub, Auth, API} from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ChatSharpIcon from '@mui/icons-material/ChatSharp';
import { fontFamily } from 'styled-system';
import '../../App.css'


const Navbar = ({currentUser}) => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [isPending, startTransition] = useTransition()
    const pages = ["test", "test1"]
    const navigate = useNavigate()
    const {user, signOut} = useAuthenticator((context) => [
      context.user,
      context.signOut
    ])
    const settings = [
      <div
        onClick={()=>{
          navigate('/user_profile')
        }}
      >
        Profile
      </div>, 
      <div>Account</div>, 
      <div onClick={() => {
        signOut()
        navigate('/')
      }}
      >
        Logout
      </div>
    ]

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleCloseNavMenu = () => {
          setAnchorElNav(null);
        };
    
        const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };

      const displayLogged = (
        <Box sx={{ flexGrow: 0 }}>
                <IconButton onClick={()=> navigate('/chats')} sx={{ pr: 5 }}>
                   <ChatSharpIcon fontSize="large"/>
                </IconButton>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src={currentUser?currentUser.profile_picture:null}/>
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  zIndex='20'
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
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
                
              </Box>
      )

   
    
    return (
      
          
          <AppBar position="sticky" color='transparent'>
            <Container maxWidth="xxl" sx={{height: '7vh'}}>
              <Toolbar disableGutters>
                <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                  className="connect"
                >
                  Connect
                </Typography>
                {user && (
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleOpenNavMenu}
                      color="inherit"
                    >
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      zIndex="20"
                      anchorEl={anchorElNav}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                      }}
                      open={Boolean(anchorElNav)}
                      onClose={handleCloseNavMenu}
                      sx={{
                        display: { xs: 'block', md: 'none' },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                )}
                <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                  Connect
                </Typography>
                <Box sx={{ flexGrow: 1, mr: 2, pl: 5, display: { xs: 'none', md: 'flex' } }}>
                  {!user? 
                      <Button
                      sx={{ my: 2, color: 'blue', display: 'block' }}
                      onClick={() => navigate("/home")}
                      >
                        Login
                      </Button>
                      :
                      <>
                      <Button
                      sx={{ my: 2, color: 'blue', display: 'block' }}
                      onClick={() => navigate("/home")}
                      >
                        Dashboard
                      </Button>
                      <Button
                      sx={{ my: 2, color: 'blue', display: 'block' }}
                      onClick={() => navigate("/search_spots")}
                      >
                        Explore
                      </Button>
                      </>
                  }
                </Box>
                {user ? displayLogged : null}
              </Toolbar>
            </Container>
          </AppBar>
         
 
    )
    
}
export default Navbar