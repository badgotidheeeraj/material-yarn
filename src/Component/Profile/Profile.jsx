import React from "react";
import { TextField, Button, Paper, Box, Typography, CardMedia, Container, Grid } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import DrawerComponent from "../Drawer/Drawer";
import ToolbarComponent from "../Toolbar/Toolbar";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(5),
        padding: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(3),
    },
    media: {
        position: "relative",
        width: "150px",  // Adjust width and height as needed
        height: "150px",
        overflow: "hidden",
        borderRadius: "50%",
        marginBottom: theme.spacing(3),
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
        display: "block",
        margin: "0 auto",
    },
}));

const App = () => {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = React.useState(false);    
    const [userData, setUserData] = React.useState({});    

console.log(`=============>>`,userData)
    const blogSave = async () => {
        try {
            const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/show-userProfile`, {
                // Add your data here
            }, {
                headers: {
                    'Content-Type': 'application/json', // Adjust content type if sending JSON
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            if (response.data) {
                console.log('Response:', response.data);
                setUserData(response.data.data)
                // Handle success or navigation logic
            }
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    React.useEffect(()=>{blogSave()},[])
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     blogSave();
    // };

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
                <Paper component={Box} elevation={16} className={classes.paper}>
                    <Typography variant="h5" align="center" gutterBottom>
                        Profile Information
                    </Typography>

                    

                    <Box component="form" mt={2}>
                        <Grid container spacing={2}>
                        <CardMedia
                        component="img"
                        src={`${process.env.REACT_APP_BASE_URL}${userData['profilePic']}`}
                        alt="Profile Picture"
                        className={classes.media}
                    />
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder="First Name"
                                    variant="outlined"
                                    className={classes.input}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder="Last Name"
                                    variant="outlined"
                                    className={classes.input}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder="Email"
                                    variant="outlined"
                                    className={classes.input}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder="Phone"
                                    variant="outlined"
                                    className={classes.input}
                                value={userData['phoneNo']}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    placeholder="Address"
                                    variant="outlined"
                                    value={userData['Adress']}
                                    className={classes.input}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    placeholder="City"
                                    variant="outlined"
                                    value={userData['City']}
                                    className={classes.input}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    // label="State"
                                    placeholder="State"
                                    variant="outlined"
                                    value={userData['state']}
                                    className={classes.input}
                                />
                            </Grid>
                        </Grid>
                        <Button
                        // type="submit"
                            variant="contained"
                            color="primary"
                            className={classes.button}
                        >
                            Update Profile
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </>
    );
};

export default App;
