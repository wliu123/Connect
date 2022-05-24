import { useEffect, useState } from "react"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Maps from "./Maps";
import { useLoadScript } from "@react-google-maps/api"
import Sidebar from "./Sidebar";
import '../styles/maps.css'



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const libraries = ["places"]
const SearchSpots = ({ createHangout }) => {
    
    const [selected, setSelected] = useState(null)
    const [center, setCenter] = useState({lat: 40.70705345683868, lng: -74.01128952515276})
    const [searchLoc, setSearchLoc] = useState([])
   
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API,
        libraries
    })


    return (
        <Box sx={{  mt: 1 }}>
          
            {!searchLoc.length>0 ? null : <Sidebar createHangout={createHangout} searchLoc={searchLoc} selected={selected}/>}      
                
            {!isLoaded ? <div>Loading...</div> : <Maps setSearchLoc={setSearchLoc} setCenter={setCenter} setSelected={setSelected} center={center} selected={selected}/>}
                
        </Box>
    )
    
}
export default SearchSpots