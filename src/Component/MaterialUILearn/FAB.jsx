import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Fab } from '@material-ui/core'
import { AddIcon } from '@material-ui/icons/Add'

const useStyle = makeStyles(theme => ({
    root: {
        width: "100vw",
        Height: "100vh",
        backgroundColor: theme.palette.secondary.light
    }


}))

const FAB = () => {
    const userstyle = useStyle()
    return (
        <>
            <Container className={userstyle.root}>
                <Fab color='secondary'>
                <AddIcon/>
                </Fab>
            </Container>
        </>
    )
}

export default FAB
