import React from "react";
import { Box, Paper, Button, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    // aling: "center",
    margin: 5,
  },
  root_child: {
    marginBottom: 20,
    width: "auto",
    background: theme.palette.success.light,
    boxShadow: theme.shadows[24],
    padding: theme.spacing(3),
    borderRadius: 10,

    // margin: 50,
  },
  image: {
    width: 300,
    height: 300,
    boxShadow: theme.shadows[4],
    borderRadius: 6,
  },
  paper: { 
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    // textAlign: "center",
  },
}));

const Home = () => {
  const data = [
    {
      name: "john",
      title: "my name is john doe from",
    },
    {
      name: "john",
      title: "my name is john doe from",
    },
    {
      name: "alice",
      title: "i name is alice smithfrom",
    },
    {
      name: "alice",
      title: "i name is alice smithfrom",
    },
    {
      name: "michael",
      title: "i name is michael johnsonfrom",
    },
    {
      name: "michael",
      title: "i name is michael johnsonfrom",
    },
    {
      name: "sarah",
      title: "my name is sarah brown from",
    },
    {
      name: "sarah",
      title: "my name is sarah brown from",
    },
    {
      name: "robert",
      title: "i name is robert davisfrom",
    },
    {
      name: "robert",
      title: "i name is robert davisfrom",
    },
  ];

  const classes = useStyle();
  return (
    <>
      <Container  maxWidth="md">
        {data.map((item, index) => (
        <Box className={classes.root}>

          <Paper
            elevation={10}
            component={Box}
            className={classes.paper}
            key={index}
          >
            <Typography variant="h2" color="primary">
              {item.name}
            </Typography>
            <Typography variant="subtitle2">{item.title}</Typography>
            <Button variant="contained" color="secondary">
              Click
            </Button>
          </Paper>
        </Box>
        ))}

      </Container>
    </>
  );
};

export default Home;
