import { useEffect, useState } from "react"
import * as queries from '../../graphql/queries';
import ListSubheader from '@mui/material/ListSubheader';
import { API } from 'aws-amplify';
import EachUpcoming from "./EachUpcoming";
import Divider from '@material-ui/core/Divider';


const EachEvent = ({currentUser, event}) => {
  
    const [eventsByDate, setEventsByDate] = useState([])
    
    useEffect(() => {
            getCreatedEvents(event)
    }, [])

    async function getCreatedEvents(event) {
       
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
        console.log(eventByDate)
        let eventItems = eventByDate.data.hangoutsByDate.items
        console.log(eventItems)
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