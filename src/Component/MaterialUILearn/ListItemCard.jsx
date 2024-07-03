import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container, Box, Paper, ListItem, ListItemText, ListItemIcon, List
} from '@material-ui/core';
import AccessibilitySharpIcon from '@material-ui/icons/AccessibilitySharp';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@material-ui/icons/Person';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { Typography } from 'antd';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
        height: '100vh',
        background: theme.palette.grey[300],
        // paddingTop: theme.spacing(5),
    },
    sidebar: {
        position: 'fixed',
        left: 0,
        top: 0,
        width: "15%",
        height: "100%",
        borderRadius: 0,
    }
}));

const ListItemCard = () => {
    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Paper boxShadow={4} component={Box} square className={classes.sidebar}>
                <List disablePadding>
                    <ListItem button>
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="h6">Home</Typography>} />
                    </ListItem>

                    <ListItem button>
                        <ListItemIcon>
                            <AccessibilitySharpIcon />
                        </ListItemIcon>
                        <ListItemText primary="Component" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <ContactMailIcon />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                            <AddLocationAltIcon />
                        </ListItemIcon>
                        <ListItemText primary="About" />
                    </ListItem>
                </List>
            </Paper>
        </Container>
    );
};

export default ListItemCard;
