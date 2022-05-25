import usePlacesAutocomplete, {getGeocode, getLatLng, getDetails} from "use-places-autocomplete"
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from "@reach/combobox"
import "@reach/combobox/styles.css"


const PlacesAutocomplete = ({setSearchLoc, setCenter, setSelected}) => {
    
    const {
        ready,
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions,
    } = usePlacesAutocomplete({
        debounce:500
    })

    const handleSelect = async (address) => {
        
        setValue(address, false)
        clearSuggestions()

        const results = await getGeocode({address})
        const parameter = {
            placeId: results[0].place_id,
            fields: ["name", "rating", "formatted_phone_number", "opening_hours", "formatted_address", "photo", "website", "price_level", "review"]
        }
        const {lat, lng} = await getLatLng(results[0])
        
       getDetails(parameter)
       .then((details) => {
           console.log(details)
           setSearchLoc([details])
       })
       .catch((error) => {
           console.log("Error: ", error)
       })
        setSelected({lat, lng})
        setCenter({lat, lng})
    }

    return (
        <Combobox onSelect={handleSelect}>
            <ComboboxInput 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            disabled={!ready} 
            className="combobox-input"
            placeholder="Search address here..."
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({place_id, description}) => <ComboboxOption key={place_id} value={description}/>)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
    
}
export default PlacesAutocomplete