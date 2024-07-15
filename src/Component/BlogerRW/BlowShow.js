import React, { useContext,useState } from 'react';
import UserContext from '../auth/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Box, CardHeader, CardActionArea, CardMedia, Button, CardActions, Typography, CardContent, Avatar, Paper
} from '@material-ui/core';
import axios from 'axios';
import { HeartFilled } from '@ant-design/icons';
import DrawerComponent from "../Drawer/Drawer";
import ToolbarComponent from "../Toolbar/Toolbar";
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    media: {
        height: 200,
        objectFit: 'cover',
    },
}));

const CardComponent = () => {
  const { user } = useContext(UserContext);

    const classes = useStyles();
    const [photos, setPhotos] = React.useState([]);
    const [heart, setHeart] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const fetchPhotos = async () => {
        try {
            const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/show-blogger?search=${user}&category=`,

                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
            );
            setPhotos(result.data.data);
        } catch (error) {
            console.error("Error fetching photos:", error);
        }
    };

    React.useEffect(() => {
        fetchPhotos();
    }, [user]);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const formatDate = (dateString) => {
        return `${String(new Date(dateString).getDate()).padStart(2, '0')}-${String(new Date(dateString).getMonth() + 1).padStart(2, '0')}-${String(new Date(dateString).getFullYear()).slice(2)}`;
    }

    return (
        <>
            <DrawerComponent
                left={drawerOpen}
                toggleDrawerHandler={toggleDrawer(false)}
            />
            <ToolbarComponent
                title={'dheeraj'} openDrawerHandler={toggleDrawer(true)} setsetSearch />
            <Container maxWidth="md" className={classes.root}>
                {photos.map((photo, index) => (
                    <Paper key={index} elevation={8} component={Box} square className={classes.paper}>
                        <CardHeader
                            avatar={
                                <Avatar>
                                    {photo.title[0]}
                                    {photo.subtitle[0]}
                                </Avatar>
                            }
                            title={photo.title}
                            subheader={formatDate(photo.DateTime)}
                            action={
                                <HeartFilled
                                    onClick={() => setHeart(!heart)}
                                    style={{ color: heart ? 'red' : '', background: 'none' }}
                                />
                            }
                        />
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                src={`${process.env.REACT_APP_BASE_URL}${photo.file}`}
                                alt="Uploaded Image"
                                className={classes.media}
                            />
                            <CardContent>
                                <Typography variant="h6">{photo.title.split(',')[0]}</Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {photo.tags}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {photo.blog.split('.')[0
                                    ]}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                component={Link}
                                to={`/views-detail?id=${photo.id}`}>
                                View
                            </Button>
                        </CardActions>
                    </Paper>
                ))}
            </Container>
        </>
    );
};

export default CardComponent;
