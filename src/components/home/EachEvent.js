import { useEffect, useState } from "react"
import * as queries from '../../graphql/queries';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { API } from 'aws-amplify';

const EachEvent = ({currentUser, event}) => {
    console.log(event)
    const [eventsByDate, setEventsByDate] = useState([])
    useEffect(() => {
        getUpcomingEvents(event)
    }, [])

    async function getUpcomingEvents(event) {
        let filter = {
            created_by: {
                contains: currentUser.id
            }
        }
        const eventByDate = await API.graphql({
            query: queries.hangoutsByDate,
            variables: {
                date: event,
                filter: filter
            },
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        let eventItems = eventByDate.data.hangoutsByDate.items
        setEventsByDate([
            ...eventsByDate,
            eventItems
        ])
    }
    return (
        <>
        <ListSubheader>{event}</ListSubheader> 
                    {eventsByDate?.map((event) => (
                    <ListItem key={event.id}>
                        <ListItemText primary="Put the name of event as primary text" />
                    </ListItem>
                    ))}
        </>
    )
    
}
export default EachEvent