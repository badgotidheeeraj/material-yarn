import React from 'react';
import { Container, Paper, Box, Typography, Divider, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StarsIcon from '@mui/icons-material/Stars';
// import { Rate } from 'antd';
// import type { InputNumberProps } from 'antd';
// import { InputNumber } from 'antd';
import Pagination from '@mui/material/Pagination';

const useStyles = makeStyles((theme) => ({
    box: {
        padding: theme.spacing(1),
        background: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
        marginBottom: theme.spacing(2)
    },
    image: {
        width: '100px',
        height: '100px',
        marginLeft: theme.spacing(2),
        borderRadius: '8px'
    },
    customButton: {
        color: 'white',
        fontWeight: 750,
        background: '#3F51B5',
        padding: '5px',
        marginTop: '5px',
        borderRadius: '30px',
        '&:hover': {
            background: '#0000cc'
        }
    },
    divider: {
        border: '0.5px dashed',
        width: '40%',
        margin: '10px 0'
    },
    dividerFull: {
        border: '1px solid #aaaaaa',
        margin: '10px 0'
    },
    listItem: {
        fontWeight: 800
    }
}));





function Profile() {
    const [data, setData] = React.useState([
        // {
        //     name: "Dheeraj Kumar singh",
        //     price: 2200,
        //     describe: ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, impedit? ", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, impedit?"],
        //     image: "https://as2.ftcdn.net/v2/jpg/05/66/22/97/1000_F_566229787_ctbNF0CueI3sV0K35hWDrGk5rd7uByWi.jpg"
        // }
        // ,
        // {
        //     name: "Chandu singh",
        //     price: 200,
        //     describe: ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, impedit? ", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, impedit?"],
        //     image: "https://img.freepik.com/premium-photo/3d-illustrated-portrait-elderly-man-with-glasses_899449-58466.jpg?w=740"
        // }
        // , {
        //     name: "Chandu singh",
        //     price: 20,
        //     describe: ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, impedit? ", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, impedit?"],
        //     image: "https://img.freepik.com/premium-photo/3d-illustrated-cartoon-man-with-sunglasses-with-backpack_1009902-21828.jpg?w=360"
        // },
         {
            name: "Shaurya Agrawal",
            price: 70,
            describe: ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, impedit? ", "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia, impedit?"],
            image: "https://as1.ftcdn.net/v2/jpg/05/46/30/74/1000_F_546307454_m9c7FwYk2WDlzDd13Pf0UO7AYnPw93rm.jpg"
        }
    ])
    const classes = useStyles();


    return (
        <>

            <Container maxWidth="sm" style={{ marginTop: '20px' }}>
                <Paper square>
                    {data.map((item, index) => (
                        <React.Fragment key={index}>
                            <Box className={classes.box}>
                                <Typography variant="h5">
                                    <b>{item.name}</b>
                                </Typography>
                                <Box style={{ display: 'flex', alignItems: 'center' }}>
                                    <StarsIcon style={{ color: 'green' }} />
                                    <Typography variant="body1" style={{ marginLeft: '5px' }}>{item.price / 2}</Typography>
                                </Box>
                                <Divider className={classes.divider} />
                                <Typography variant="subtitle1" style={{ color: 'green' }}>
                                    <span style={{ color: 'red' }}><b>₹: </b></span><b>{(item.price / 2.2).toFixed(2)}</b>
                                    {/* <InputNumber min={1} max={10} defaultValue={3} /> */}
                                </Typography>

                                <Divider />
                                <Box style={{ display: 'flex', alignItems: 'center' }}>
                                    <Box>
                                        {item.describe.map((desc, i) => (

                                            <Typography key={i} variant="subtitle2" style={{ display: 'flex' }}>
                                                <li className={classes.listItem}></li> {desc}</Typography>
                                        ))}
                                    </Box>
                                    <img
                                        src={item.image}
                                        className={classes.image}
                                        alt=""
                                    />
                                </Box>
                                <Button className={classes.customButton}>
                                    Views all
                                </Button>
                            </Box>
                            <Divider className={classes.dividerFull} />
                            
                        </React.Fragment>
                    ))}

                </Paper>
                            <Pagination  count={10} variant="outlined" />
            </Container>
        </>

    );
}

export default Profile;




