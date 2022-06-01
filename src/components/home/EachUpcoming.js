import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@material-ui/core/Divider';

const EachUpcoming = ({event}) => {
    
    return (
        <>
        <ListItem key={event.id}>
            <ListItemText primary={event.title} secondary={event.location}/>
        </ListItem>
        <Divider/>
        </>
    )
    
}
export default EachUpcoming