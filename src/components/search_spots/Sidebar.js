import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Reviews from './Review';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useState } from 'react';
import HangoutForm from './HangoutForm';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Grid from '@mui/material/Grid';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Sidebar = ({ setSearchLoc, searchLoc, currentUser }) => {

   const [open, setOpen] = useState(false)
   const [snackBar, setSnackBar] = useState(false)
   const [selectAddress, setSelectAddress] = useState("")
    
  console.log(searchLoc)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackBar(false);
  };
  
    return (
        <>
        {open 
            ?
            
            null

            :

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    p: 1,
                    overflowY: 'scroll',
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    position: 'absolute',
                    zIndex: 'tooltip',
                    height: '93vh'
                }}
            >
                <Box
                    sx={{
                        overflowY: 'scroll',
                        minHeight: 500,
                        maxHeight: 500
                    }}
                >

                    <ImageList sx={{ width: 500}} cols={3} rowHeight={164}>
                        
                        {searchLoc[0].photos.map((photo) => {
                            
                            const photoUrl = photo.getUrl()
                            return (
                                
                                <ImageListItem key={photoUrl}>
                                <img
                                    src={`${photoUrl}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${photoUrl}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt="photo from google"
                                    loading="lazy"
                                />
                                </ImageListItem>
                            )
                        }
                        
                        )}
                    </ImageList>
                </Box>
                <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                    {searchLoc[0].name}
                </Typography>
                <List style={{width: '100%', alignContent:'center', textAlign:'center', justifyContent:'center'}}>
                    <ListItem>
                        <ListItemText primary={searchLoc[0].formatted_address} />
                    </ListItem>
                <Divider />
                    <ListItem>
                        <Button onClick={() => {
                                setOpen(true)
                                setSelectAddress(searchLoc[0].formatted_address)
                            }} 
                            sx={{px:10}}variant="outlined" endIcon={<SendIcon />}
                        >
                            Create Hangout
                        </Button>
                    </ListItem>
                <Divider />
                    <ListItem>
                        <ListItemText primary={searchLoc[0].opening_hours.weekday_text.map((hours)=> {
                                return (
                                    <ul>
                                        <li>{hours}</li>
                                    </ul>
                                )
                            })
                        } />
                    </ListItem>
                </List>

                    {searchLoc[0].reviews.map((review) => {
                        return (
                            <Reviews review={review} />
                        )
                    })}
               
            </Box>
        }
            {open ? <HangoutForm setSearchLoc={setSearchLoc} setSnackBar={setSnackBar} currentUser={currentUser} selectAddress={selectAddress} setOpen={setOpen} open={open}/> : null}   
            <Snackbar anchorOrigin={{vertical: 'bottom', horizontal: 'center'}} zIndex='3' open={snackBar} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Hangout created successfully!
                </Alert>
            </Snackbar>         
        </>
       
    )
    
}
export default Sidebar