import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Reviews = ({review}) => {
    
    return (
    <Box sx={{ maxWidth: 450, maxHeight: 300 }}>
      <Card variant="outlined">
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {review.author_name}
        </Typography>
        <Typography variant="h5" component="div">
            {review.rating}
        </Typography>
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
    </Box>
    )
    
}
export default Reviews