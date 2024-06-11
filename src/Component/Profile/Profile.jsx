import React from 'react'
import { Paper, Typography, Box, Container } from '@material-ui/core'

const Profile = () => {
    return (

        <Container maxWidth="sm" sx={{ my: 4 }}>
            <Paper elevation={3}>
                <Box
                    p={4}
                    sx={{
                        minHeight: '200px',
                        backgroundColor: '#f5f5f5',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        boxShadow: 1
                    }}
                >
                    <Typography variant="h5">
                        Hi, this is Dheeraj Kumar Singh
                    </Typography>
                    <Typography variant="subtitle2">
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores ipsum quod, enim assumenda, eum mollitia a totam quos facere, sint explicabo tempora ut sequi quia in iste sunt minus voluptates nobis architecto aut? Facilis optio eius ipsum eaque. Eum totam inventore quas odio, repellat cumque eos. Soluta ipsam minus, facere corporis minima neque natus aspernatur distinctio. Cum voluptatibus, culpa in neque maxime incidunt vitae autem vel rem aspernatur aliquam placeat temporibus quasi aperiam sequi explicabo, quisquam alias! Debitis laudantium tempora reiciendis magnam odio, dolor, sunt placeat impedit sapiente cum dolorem, non vitae? Nemo, placeat reiciendis quasi facere dignissimos exercitationem corporis.
                    </Typography>
                </Box>
            </Paper>
        </Container>
    )
}

export default Profile 