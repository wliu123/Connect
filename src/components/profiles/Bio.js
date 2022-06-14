import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
  
  const Bio = ({currentUser}) => {
        const card = (
        <>
            <CardContent>
            <Typography variant="h6" gutterBottom sx={{textAlign:'center'}}>
                Bio
            </Typography>
            <TextField
                id="filled-multiline-static"
                multiline
                fullWidth
                rows={12}
                defaultValue={currentUser.bio}
                variant="filled"
                InputProps={{
                    readOnly: true,
                    }}
            />
            </CardContent>
        </>
        
        );
    
    return (
        <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
        </Box>
    )
    
}
export default Bio