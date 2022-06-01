import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Box from '@mui/material/Box';

const EditProfile = ({currentUser, editProfile, setEditProfile}) => {
    
    const [modProfile, setModProfile] = useState({
        name: currentUser.name,
        bio: currentUser.bio
    })

    const handleProfileClose = () => {
        setEditProfile(false);
      };

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
            type="bio"
            fullWidth
            variant="standard"
            autoComplete="off"
          />
        </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleProfileClose}>Cancel</Button>
          <Button onClick={handleProfileClose}>Modify</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
    
}
export default EditProfile