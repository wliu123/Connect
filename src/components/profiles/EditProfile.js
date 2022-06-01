import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { API } from 'aws-amplify';
import * as mutations from '../../graphql/mutations'

const EditProfile = ({currentUser, editProfile, setEditProfile}) => {
    
    const [modProfile, setModProfile] = useState({
        name: currentUser.name,
        bio: currentUser.bio
    })

    const handleProfileClose = () => {
        setEditProfile(false);
      };

    async function handleSubmit() {
        let updateDetails = {
            id: currentUser.id,
            name: modProfile.name,
            bio: modProfile.bio
        }
        await API.graphql({
            query: mutations.updateUsers,
            variables: {
                input: updateDetails
            }
        })
        setEditProfile(false)
    }

    return (
        <div>
      <Dialog open={editProfile} onClose={handleProfileClose}>
        <DialogTitle>Modify your Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To modify your profile, fill in the appropriate fields and submit.
          </DialogContentText>
        <Box
            sx={{
                pt: 3
            }}
        >

          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            value={modProfile.name}
            onChange={(e) => {
                setModProfile({
                    ...modProfile,
                    [e.target.name]:e.target.value
                })
            }}
            type="name"
            fullWidth
            variant="standard"
            autoComplete="off"
          />
          <TextField
            margin="dense"
            id="name"
            name="bio"
            label="Bio"
            value={modProfile.bio}
            onChange={(e) => {
                setModProfile({
                    ...modProfile,
                    [e.target.name]:e.target.value
                })
            }}
            type="bio"
            fullWidth
            variant="standard"
            autoComplete="off"
          />
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProfileClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Modify</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
    
}
export default EditProfile