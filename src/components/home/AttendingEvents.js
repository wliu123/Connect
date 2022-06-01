import List from '@mui/material/List';
import { useEffect, useState } from 'react';
import EachEvent from './EachEvent';


const AttendingEvents = ({currentUser}) => {

    const [todaysDate, setTodaysDate] = useState(new Date())
    const [selfDateRange, setSelfDateRange] = useState([])

    useEffect(() => {
        const ranges = Array.from({length: 7}, (x, i) => i)
        const getDate = todaysDate => (relative = 0) => {
            let newDate = todaysDate ? new Date(todaysDate) : new Date();
            newDate.setDate(newDate.getDate() + relative);
            return newDate
        }
        const getDates = (todaysDate, offsets=[0]) => {
            const getDateOffset = getDate(todaysDate);
            return offsets.map((offset, index) => {
                const offSetDate = getDateOffset(offset)
                return {
                    id: index,
                    date: offSetDate.toDateString()
                }
            })
        }
        const state = {
            dates: getDates(todaysDate, ranges)
        }
        setSelfDateRange([state])
    }, [])

    return (
        <List
            sx={{
                width: '100%', 
                minHeight: 250, 
                bgcolor: 'background.paper',
                position: 'relative',
                overflow: 'auto',
                maxHeight: 300,  
                borderColor: 'text.primary',
                border: 1,
                borderRadius:1,
                '& ul': { padding: 0 },
            }}
            subheader={<li />}
            >
            {selfDateRange[0]?.dates?.map((event) => (
                <li key={event.id}>
                    <ul>
                        <EachEvent currentUser={currentUser} event={event.date}/>
                    </ul>
                </li>
            ))}
        </List>
    )
    
}
export default AttendingEvents