import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const ListEvents = ({currentUser, createdEvents}) => {
   
    const [expanded, setExpanded] = useState("");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    return (
        <div>
        {createdEvents.map((event) => {
            return (
                <Accordion expanded={expanded === event.id} onChange={handleChange(event.id)} sx={{width:1420}}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                    <Typography>{event.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Date: {event.date}
                    </Typography>
                    <Typography>
                        Address: {event.location}
                    </Typography>
                    <Typography>
                        Description: {event.description}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        })}
    
    </div>
    )
    
}
export default ListEvents