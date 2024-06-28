import React from 'react'
import {
    Container, Fab, Box, CardHeader, TextField, Grid, Card, CardActionArea, CardMedia, Button, CardActions, Typography, CardContent, Avatar,
    Paper,
    InputAdornment
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const userstyle = makeStyles((theme => ({
    root: {
        width: "100vw",
        height: "100vh",
        backgroundColor: theme.palette.grey[300],
        // peddingTop:theme.spa,
        paddingTop: theme.spacing(5),
        // paddingBottom: theme.spacing(5),
        // spacing:"10px"
    },
    box: {
        width: "30%", mx: 'auto', pedding: theme.spacing(4)
    }
})))

const Text = () => {
    const classes = userstyle()

    return (
        <Container maxWidth="md" className={classes.root}>
            <Paper component={Box} className={classes.box}>
                <Typography variant='h5'> Hi, this is Dheeraj</Typography>
                <Box component={'form'} mt={2}>
                    <TextField fullWidth placeholder='first name' variant='outlined' />
                    <TextField fullWidth placeholder='last name' variant='outlined' />
                    <TextField fullWidth placeholder='Email' variant='outlined' />
                </Box>
            </Paper>
        </Container>
    )
}

export default Text