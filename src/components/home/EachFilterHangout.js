import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import EachFilter from './EachFilter';
import { useEffect } from "react"
import * as queries from '../../graphql/queries';
import {API} from 'aws-amplify'

const EachFilterHangout = ({setHangoutDate, hangoutDate, filterDate}) => {
    
    useEffect(() => {
        if (filterDate) {
            getFilteredDate(filterDate)
        }
    },[filterDate])

    async function getFilteredDate(filterDate) {
        let searchDate = filterDate[0].date
        const hangoutByDate = await API.graphql({
            query: queries.hangoutsByDate,
            variables: {
                date: searchDate
            },
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        let hangouts = hangoutByDate.data.hangoutsByDate.items
        setHangoutDate([hangouts])
    }

    return (
        <>
        <ListSubheader> {filterDate[0].date}</ListSubheader>
        <Divider variant="middle"/>
            {
            !hangoutDate.length > 0
            ?
            <div>Loading...</div>
            :
            <>
            
                {hangoutDate[0].map((hangout) => {
                    
                        return (
                            <EachFilter hangout={hangout}/>
                        )
                    
                })}
            
            </>
            }
        </>
    )
    
}
export default EachFilterHangout