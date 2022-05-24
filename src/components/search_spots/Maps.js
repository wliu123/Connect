import {  GoogleMap, Marker } from "@react-google-maps/api"
import '../styles/maps.css'
import {useState, useMemo, useCallback, useRef, useEffect} from "react"
import "@reach/combobox/styles.css"
import PlacesAutocomplete from "./PlacesAutocomplete"
import '../styles/placesautocomplete.css'


const Maps = ({setSearchLoc, setCenter, center, selected, setSelected}) => {

    const mapRef = useRef()
    const onLoad = useCallback(map => mapRef.current = map, [])
    
    return (
        <>
        <GoogleMap
        zoom={14}
        center={center}
        mapContainerClassName='map_container'
        onLoad={onLoad}
        >
            {selected && (
                <Marker position={selected}/>
                )}
            <div className="places_container">

            <PlacesAutocomplete setSearchLoc={setSearchLoc} setCenter={setCenter} setSelected={setSelected} />
            </div>
        </GoogleMap>
        </>
    )
    
}
export default Maps