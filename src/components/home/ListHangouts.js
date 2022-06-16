import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HangoutDate from "./HangoutDate";

const ListHangouts = ({dateRange}) => {
 
    return (
       <>
                <Typography sx={{ mt: 4, mb: 2, mx: 20, alignSelf:'center', alignContent:'center' }} variant="h6" component="div">
                    Upcoming Hangouts
                </Typography>
        <Box
            sx={{
                mx: 5,
                maxHeight: 1100,
                overflowY:'scroll'
            }}
        >
            {
                !dateRange.length>0
                ?
                (<div> Loading...</div>)
                :
                (

                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            '& ul': { padding: 0 },
                            border: 'solid 1px'
                        }}
                        subheader={<li />}
                    >
                        {dateRange[0].dates.map((eachDate) => {
                           
                            return (
                            <li key={eachDate.id}>
                                <ul>
                                    <HangoutDate eachDate={eachDate.date} />
                                  
                                </ul>
                            </li>
                            )
                        }
                        )}
                    </List>
                )
            }
        </Box>
       </>
    )
    
}
export default ListHangouts