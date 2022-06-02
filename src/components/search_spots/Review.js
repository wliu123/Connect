import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';

const Reviews = ({review}) => {
    
    return (
    <Box sx={{ display: 'block', maxWidth: 450, maxHeight: 300 }}>
        <Grid
        style={{
            flexGrow: 1,
            flexWrap: "nowrap",
            overflowY: "hidden"
        }}
        >

      <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {review.author_name}
        </Typography>
        <Rating name="read-only" value={review.rating} readOnly />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {review.relative_time_description}
        </Typography>
        <Box
            component="div"
            sx={{
                overflowY: 'auto',
                textOverflow: 'ellipsis'
            }}
        >

        <Typography variant="body2">
            {review.text}
        </Typography>
        </Box>
        </CardContent>
      </Card>
        </Grid>
    </Box>
    )
    
}
export default Reviews