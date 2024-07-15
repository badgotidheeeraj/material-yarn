import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Container, Fab, Box, CardHeader, TextField, Grid, Card, CardActionArea, CardMedia, Button, CardActions, Typography, CardContent, Avatar
} from '@material-ui/core'
import axios from 'axios'
import { HeartFilled } from '@ant-design/icons';
const useStyle = makeStyles(theme => ({
    root: {
        width: "100vw",
        Height: "100vh",
        backgroundColor: theme.palette.grey[500],
        // peddingTop:theme.spa,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        // spacing:"10px"
    },
    add: {
        position: "fixed",
        bottom: '5%',
        right: '5%',
        zIndex: theme.zIndex.tooltip,
    },

    media: {
        height: 300,
    },

}))

const Crad = () => {
    const classes = useStyle()
    const [photos, setPhoto] = React.useState([])
    const [data, setData] = React.useState('flower')//yellow+flowers
    const [heart, setHeart] = React.useState(false)//yellow+flowers
    console.log('====', photos);

    const fetchphoto = async () => {
        const result = await axios.get(`https://pixabay.com/api/?key=13779778-261a7a56f9e86340977de3acb&q=${data}s&image_type=photo&pretty=false`)
        // const result = await axios.get('https://pixabay.com/api/?key=13779778-261a7a56f9e86340977de3acb&q=yellow+flowers&image_type=photo&pretty=false')

        setPhoto(result.data.hits)
    }
    React.useEffect(() => {
        fetchphoto();
    }, [data]);

    return (<>
        <Container maxWidth="lg" className={classes.root}>
            <Card style={{ margin: '10px' }}>

                <TextField fullWidth placeholder='enter name ' value={data} onChange={(event) => { setData(event.target.value) }} id="fullWidth" />                </Card>
            <Grid container spacing={1}>
                {photos.map((photo, key) => (
                    <Grid item sm={4} key={key}>
                        <Card variant='outliner'>

                            <CardHeader avatar={<Avatar>{photo.tags[0].toUpperCase()}{photo.user[0]}</Avatar>} title={photo.tags} subheader={photo.user}
                                action={<HeartFilled onClick={() => (setHeart(true))} style={{ color: heart ? 'red' : '', background: '' }}
                                />} />

                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={photo.previewURL}
                                    className={classes.media}
                                    alt={photo.tags}
                                />
                                <CardContent>
                                    <Typography variant="h6">{photo.tags.split(',')[0]}</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {photo.tags}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" href={photo.pageURL} target="_blank">
                                    View
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

export default Crad
