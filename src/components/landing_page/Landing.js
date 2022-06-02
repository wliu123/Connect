
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import '../../App.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    maxWidth: 1000,
    color: theme.palette.text.primary,
  }));

const Landing = () => {
    
    return (
        <>
        <Box
            sx={{
                flexGrow: 1,
                px:20,
                pt: 10
            }}
        >
        <StyledPaper
            sx={{
            my: 1,
            mx: 'auto',
            p: 2,
            }}
        >

        <Grid container wrap='nowrap' sx={{height: 400}}>
            <Grid item xs={6} >
                <Typography variant="h2" component="div">
                    Come Connect with us!
                </Typography>
                <Typography variant="subtitle1" component="div" sx={{pt: 10}}>
                    Whatever you're looking to do this year, Connect is the place to allow you and your friends the ability to manage your hangouts while also meeting others! 
                    Gone are the days of suddenly remembering you have a commitment and needing to bail. 
                    Join us as we embark on a journey to keep track of when we're meeting our friends.
                </Typography>
            </Grid>
        <Grid item xs={6}>
        <img style={{height:'100%', width:'100%'}}src={'https://img.freepik.com/free-vector/business-team-putting-together-jigsaw-puzzle-isolated-flat-vector-illustration-cartoon-partners-working-connection-teamwork-partnership-cooperation-concept_74855-9814.jpg?w=1800&t=st=1654181211~exp=1654181811~hmac=3b1313fd2ed372eb2b41f55535c91a35cbc93120782219dd08a9965fe92e8a3c'}></img>
        </Grid>
        </Grid>
      </StyledPaper>
      </Box>
        <Grid sx={{height: 200}}>
           
        </Grid>
        <Grid sx={{height: 100}}>
            <Grid item xs={3} sx={{justifyContent:'center', alignContent:'center' }}>

             <Typography variant="h4" component="div" sx={{textAlign:'center'}}>
                    How Connect Works
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{textAlign:'center', pt:3}}>
                    Connect with old and new friends and manage your hangouts in one space. It's free to join!
            </Typography>
            </Grid>
        </Grid>
        <Grid container columnSpacing={{xs:10}}sx={{height: 455, bgcolor:'lightblue', px: 15, pt:5}}>
            <Grid item xs={4} sx={{justifyContent:'center'}}>

                <Card sx={{ minHeight:385 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="https://img.freepik.com/free-vector/video-conference-concept-online-meeting-work-with-colleagues-remote-project-management-distance_110633-1181.jpg?w=1800"
                    alt="join event"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Join an event
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Select from a range of hangouts listed on your dashboard. There is the option of filtering by public or private events.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>

                <Card sx={{ minHeight:385 }}>
            <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="https://img.freepik.com/free-vector/happy-woman-chatting-with-friends-online_74855-14073.jpg?t=st=1654181202~exp=1654181802~hmac=c6ff4d524f2b4150c300765c8e4b19182416ac84525dc8c02aa5ddb71fefc0b9&w=1480"
                    alt="search spots"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Search for spots
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Utilize our GoogleMaps feature to search nearby spots and create a hangout!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            <Grid item xs={4}>

                <Card sx={{ minHeight:385 }}>
            <CardActionArea>
                    <CardMedia
                    component="img"
                    height="250"
                    image="https://img.freepik.com/free-vector/business-people-with-connection-icons_53876-66205.jpg?t=st=1654183855~exp=1654184455~hmac=487f8c7093f931f01a64070995299fdf30872a5dd627cf76737883aea77fd345&w=1800"
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Chat with friends
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Keep up with your friends or strangers by chatting with them on the application. Decide which events to join together!
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
        </Grid>
            <Grid xs={12} sx={{height: 300}}>

            </Grid>
        
        </>
    )
    
}
export default Landing