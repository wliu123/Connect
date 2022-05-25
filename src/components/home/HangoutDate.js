import { useEffect, useState } from "react"
import {API} from 'aws-amplify'
import * as queries from '../../graphql/queries';
import ListSubheader from '@mui/material/ListSubheader';
import EachHangout from "./EachHangout";



const HangoutDate = ({eachDate}) => {
    const [listHangoutsByDate, setListHangoutsByDate] = useState([])
    useEffect(() => {
        getDateHangouts(eachDate)
    }, [])

    async function getDateHangouts(eachDate) {
        const hangoutByDate = await API.graphql({
            query: queries.hangoutsByDate,
            variables: {
                date: eachDate
            },
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        let hangoutItems = hangoutByDate.data.hangoutsByDate.items
        setListHangoutsByDate([
            ...listHangoutsByDate,
            hangoutItems
        ])
    }

    return (
   
       <>
       <ListSubheader>{eachDate}</ListSubheader>
       {
           !listHangoutsByDate.length > 0
           ?
           <div>Loading...</div>
           :
           <>
           
               {listHangoutsByDate[0].map((hangout) => {
                   
                       return (
                           <EachHangout hangout={hangout}/>
                       )
                   
               })}
           
           </>
       }
       </>
        
      
      
    )
    
}
export default HangoutDate