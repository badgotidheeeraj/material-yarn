import React ,{useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Container, Fab, Box,

    Grid, Card, CardActionArea, CardMedia, Button, CardActions, Typography, CardContent
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';


const useStyle = makeStyles(theme => ({
    root: {
        width: "100vw",
        Height: "100vh",
        backgroundColor: theme.palette.grey[800]
    },
    add: {
        position: "fixed",
        bottom: '5%',
        right: '5%',
        zIndex: theme.zIndex.tooltip,
    }
}))


const FAB = () => {
    const userstyle = useStyle()
    const [userData, setUserData] = React.useState([])
    const loader = async () => {
        const result = await axios.get('https://jsonplaceholder.typicode.com/users')

        setUserData(result.data)
    }
    React.useInsertionEffect(() => {
        loader()
    }, [])



    useEffect(() => {
        const fetchSpotifyData = async () => {
            const options = {
                method: 'GET',
                url: 'https://youtube-music-api3.p.rapidapi.com/search_suggestions',
                params: {q: '7 years'},
                headers: {
                  'x-rapidapi-key': '673bc87fc0msh3d47bcded334235p1386d7jsnc72b0aac2c56',
                  'x-rapidapi-host': 'youtube-music-api3.p.rapidapi.com'
                }
              };

            try {
                const response = await axios.request(options);
                console.log(response.data);
            } catch (error) {
                console.error(error,'==================>>><><>');
            }
        };

        fetchSpotifyData();
    }, []); 









    return (
        <>
            <Container className={userstyle.root}>
                <Fab color='secondary' className={userstyle.add} variant='extended'>
                    <AddIcon /> Create User
                </Fab>
                <Grid container spacing={2} style={{ margin: '5px' }}>
                    {userData.map((user) => (
                        // item xs={12} sm={6} md={4} lg={3}
                        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component='img'
                                        image='https://www.lightstalking.com/wp-content/uploads/stephanie-leblanc-JLMEZxBcXCU-unsplash.jpg'
                                        alt={user.name}
                                    />
                                    <CardContent>
                                        <Box>

                                            <Typography variant='h6'>{user.name}</Typography>
                                            <Typography>{user.email}</Typography>
                                            <Typography style={{ color: 'green', fontWeight: 800 }} > {user.address['street']}</Typography>
                                            <Typography style={{ color: 'blue' }} > {user.address['city']}</Typography>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button style={{ background: "green", color: 'white', fontWeight: 800 }}>
                                        More info
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default FAB
