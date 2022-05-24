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



const Sidebar = ({searchLoc, createHangout}) => {

   
    
  console.log(searchLoc)
  
    return (


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
                        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                            
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
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            {searchLoc[0].name}
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText primary={searchLoc[0].formatted_address} />
                            </ListItem>
                        <Divider />
                            <ListItem>
                                <Button onClick={()=> createHangout(searchLoc[0].formatted_address)} sx={{px:10}}variant="outlined" endIcon={<SendIcon />}>
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
       
    )
    
}
export default Sidebar