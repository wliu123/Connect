import { useEffect, useState } from "react"
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EachFilterHangout from "./EachFilterHangout";

const FilterHangout = ({searchParams}) => {
    const [filterDate, setFilterDate] = useState(false)
    const [hangoutDate, setHangoutDate] = useState([])

    useEffect(() => {
        let searchDate = searchParams.get('date')
        if (searchDate) {
            const dateString = new Date(searchDate).toDateString()
            setFilterDate([{
                date: dateString
            }])
        }
    },[searchParams])

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
                    <li >
                        {
                            filterDate
                            ?
                            <ul>
                                <EachFilterHangout setHangoutDate={setHangoutDate} filterDate={filterDate} hangoutDate={hangoutDate}/>
                            </ul>
                            :
                            <div>Loading...</div>
                        }
                    </li>
                </List>
            </Box>
        </>
    )
    
}
export default FilterHangout