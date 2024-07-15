import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, CardHeader, Avatar, CardActionArea, CardMedia, CardContent, Typography, makeStyles } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import DrawerComponent from "../Drawer/Drawer";
import axios from 'axios';
import ToolbarComponent from "../Toolbar/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
  media: {
    height: 300,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

function ResponsiveCard() {
  const location = useLocation();
  const classes = useStyles();
  const [detaildata, setDetailData] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchPhotos = async () => {
      const id = new URLSearchParams(location.search).get('id');
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/bloger-creater-id/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          }
        );
        setDetailData(result.data.data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, [location.search]);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <DrawerComponent
        left={drawerOpen}
        toggleDrawerHandler={toggleDrawer(false)}
      />
      <ToolbarComponent openDrawerHandler={toggleDrawer(true)} />
      <Container maxWidth="md" className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={15} className={classes.paper}>
              <CardHeader
                avatar={
                  <Avatar>
                    {detaildata.title ? detaildata.title[0] : ''}
                    {detaildata.title ? detaildata.title[0] : ''}
                  </Avatar>
                }
                title={detaildata.title}
                subheader={detaildata.DateTime}
              />
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`${process.env.REACT_APP_BASE_URL}${detaildata.file}`}
                  className={classes.media}
                  alt="Photo Tags"
                />
                <CardContent>
                  <Typography variant="h6">
                    {detaildata.blog}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default ResponsiveCard;
