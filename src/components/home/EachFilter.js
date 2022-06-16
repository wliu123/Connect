import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const EachFilter = ({hangout}) => {
    
    return (
        <ListItem key={hangout.id}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper', border:1, borderRadius: '16px' }}>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h5" component="div">
                        {hangout.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="body2" fontStyle={'italic'} component="div">
                        {hangout.created_by}
                        </Typography>
                    </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                    {hangout.location}
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1">
                    {hangout.description}
                    </Typography>
                </Box>
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Button>Join event</Button>
                </Box>
            </Box>
        </ListItem>
    )
    
}
export default EachFilter