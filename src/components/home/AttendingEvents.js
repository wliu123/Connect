import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

const AttendingEvents = () => {
    
    return (
        <List
            sx={{
                width: '100%',
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 150,
                borderColor: 'text.primary',
                border: 1,
                borderRadius:1,
                '& ul': { padding: 0 },
            }}
            subheader={<li />}
            >
            {[0, 1, 2, 3, 4].map((sectionId) => (
                <li key={`section-${sectionId}`}>
                <ul>
                    <ListSubheader>Put the date of event as subheader</ListSubheader> 
                    {[0, 1, 2].map((item) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                        <ListItemText primary="Put the name of event as primary text" />
                    </ListItem>
                    ))}
                </ul>
                </li>
            ))}
        </List>
    )
    
}
export default AttendingEvents