import { useEffect, useState } from "react"
import * as queries from '../../graphql/queries';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { API } from 'aws-amplify';
import EachUpcoming from "./EachUpcoming";
import Divider from '@material-ui/core/Divider';

const EachEvent = ({currentUser, event}) => {
  
    const [eventsByDate, setEventsByDate] = useState([])
    useEffect(() => {
       

            getUpcomingEvents(event)
        
    }, [])

    async function getUpcomingEvents(event) {
       
        let filter = {
            created_by: {
                contains: currentUser.email
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
        <Divider/>
                    {
                        !eventsByDate.length>0
                        ?
                        <div>Loading...</div>
                        :
                        <>
                        {eventsByDate[0].map((event) => (
                            <EachUpcoming event={event}/>
                        ))}
                        </>

                    }
        </>
    )
    
}
export default EachEvent