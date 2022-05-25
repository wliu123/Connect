import Button from '@mui/material/Button';
import {API} from 'aws-amplify'
import * as mutations from '../../graphql/mutations'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker'
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';


const HangoutForm = ({ setSearchLoc, setSnackBar, currentUser, open, setOpen, selectAddress }) => {
    const [date, setDate] = useState("")
    const [isPublic, setIsPublic] = useState(true)
    const [formValues, setFormValues] = useState({
        title: "",
        description: ""
    })

    function handleClose() {
        setOpen(false)
    }

    async function createHangout() {
        const hangoutDetail = {
            created_by: currentUser.attributes.email,
            date: date,
            description: formValues.description,
            title: formValues.title,
            location: selectAddress,
            public: isPublic
        }
        setOpen(false)
        setSnackBar(true)
        setSearchLoc([])
        await API.graphql({
            query: mutations.createHangouts,
            variables: {
                input: hangoutDetail
            }
        })
    }

    return (
        <>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Connect With Others!</DialogTitle>
            <DialogContent>
            <DialogContentText>
                To create a hangout, please enter the title of your event along with the date and a short description to entice others to join!
            </DialogContentText>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'row',
                        mt:2
                    }}
                >

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                        label="Select Date"
                        value={date}
                        onChange={(newDate) => {
                        setDate(newDate.toDateString());
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <Box
                    sx={{
                        pl: 30
                    }}
                >

                    <FormGroup pl={5}>
                        <FormControlLabel 
                            control={
                                <Switch checked={isPublic} onClick={()=>setIsPublic(!isPublic)} />
                            } 
                            label="Public" 
                        />
                    </FormGroup>
                </Box>
                </Box>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                type="title"
                name="title"
                fullWidth
                variant="standard"
                autoComplete='off'
                onChange={(e)=>{
                    setFormValues({
                        ...formValues,
                        [e.target.name]:e.target.value
                    })
                }}
            />
            <TextField
                disabled
                margin="dense"
                id="name"
                label="Address"
               
                fullWidth
                variant="standard"
                defaultValue={selectAddress}
                autoComplete='off'
            />
            <TextField
            
                margin="dense"
                id="name"
                label="Description"
                type="description"
                name="description"
                fullWidth
                variant="standard"
                autoComplete='off'
                onChange={(e)=>{
                    setFormValues({
                        ...formValues,
                        [e.target.name]:e.target.value
                    })
                }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={createHangout}>Submit</Button>
            </DialogActions>
        </Dialog>
        </>
    )
    
}
export default HangoutForm