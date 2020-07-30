import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

function Category() {
    const classes = useStyles();
    return (
        <div>
            <ListItem button selected divider>
                <ListItemText>Starter</ListItemText>
            </ListItem>
            <ListItem button divider>
                <ListItemText>Lunch</ListItemText>
            </ListItem>
        </div>
    )
}

export default Category
