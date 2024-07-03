import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Box, Paper, ListItem, ListItemText, List
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        background: theme.palette.grey[500],
        paddingTop: theme.spacing(5),
    },
    sidebar: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: "25%",
        height: "100%",
        borderRadius: 0,
    }
}));

const ListItemCard = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Paper component={Box} boxShadow={4} className={classes.sidebar}>
                <List>
                    <ListItem>
                        <ListItemText primary="hi" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="hi" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="hi" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="hi" />
                    </ListItem>
                </List>
            </Paper>
        </Container>
    );
};

export default ListItemCard;
