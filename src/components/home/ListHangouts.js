import { useEffect, useState } from "react"
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HangoutDate from "./HangoutDate";

const ListHangouts = ({value, listHangoutsByDate, setListHangoutsByDate}) => {

    // set date ranges from current date begin
    const [dateRange, setDateRange] = useState([])
    useEffect(() => {
        const ranges = Array.from({length: 10}, (x, i) => i)
        const getDate = value => (relative = 0) => {
            let newDate = value ? new Date(value) : new Date();
            newDate.setDate(newDate.getDate() + relative);
            return newDate
        }
        const getDates = (value, offsets=[0]) => {
            const getDateOffset = getDate(value);
            return offsets.map((offset, index) => {
                const offSetDate = getDateOffset(offset)
                return {
                    id: index,
                    date: offSetDate.toDateString()
                }
            })
        }
        const state = {
            dates: getDates(value, ranges)
        }
        setDateRange([state])
    },[])
    // set date ranges from current date end 
    
    
    
    return (
       
        <Box
            sx={{
                mx: 5
            }}
        >
            <Typography sx={{ mt: 4, mb: 2, mx: 20 }} variant="h6" component="div">
                Upcoming Hangouts
            </Typography>
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
                        }}
                        subheader={<li />}
                    >
                        {dateRange[0].dates.map((eachDate) => {
                            // getDateHangouts(eachDate.date)
                           
                            return (
                            <li key={eachDate.id}>
                                <ul>
                                    <HangoutDate listHangoutsByDate={listHangoutsByDate} setListHangoutsByDate={setListHangoutsByDate} eachDate={eachDate.date} />
                                  
                                </ul>
                            </li>
                            )
                        }
                        )}
                    </List>
                )
            }
        </Box>
    )
    
}
export default ListHangouts