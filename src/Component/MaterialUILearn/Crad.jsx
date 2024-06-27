import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Container, Fab, Box, Grid, Card, CardActionArea, CardMedia, Button, CardActions, Typography, CardContent,
} from '@material-ui/core'

const useStyle = makeStyles(theme => ({
    root: {
        width: "100vw",
        Height: "100vh",
        backgroundColor: theme.palette.grey[700],
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
    }


}))

const Crad = () => {
    const classes =useStyle()
    return (
        <Container className={classes.root}  >
            <Grid  Container item={3}>
                <Grid item sm={3}>
                    <Card>
                        <CardContent>
                            <Typography variant='h6' >Dheeraj</Typography>
                            <Typography variant='subtile3' >Lorem ipsum dolor sit amet consectetur cupiditate perferendis facere tempora, repellendus asperiores ad debitis vitae.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3}>
                    <Card>
                        <CardContent>
                            <Typography variant='h6' >Dheeraj</Typography>
                            <Typography variant='subtile3' >Lorem ipsum dolor sit amet consectetur cupiditate perferendis facere tempora, repellendus asperiores ad debitis vitae.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3}>
                    <Card>
                        <CardContent>
                            <Typography variant='h6' >Dheeraj</Typography>
                            <Typography variant='subtile3' >Lorem ipsum dolor sit amet consectetur cupiditate perferendis facere tempora, repellendus asperiores ad debitis vitae.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item sm={3}>
                    <Card>
                        <CardContent>
                            <Typography variant='h6' >Dheeraj</Typography>
                            <Typography variant='subtile3' >Lorem ipsum dolor sit amet consectetur cupiditate perferendis facere tempora, repellendus asperiores ad debitis vitae.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Crad
