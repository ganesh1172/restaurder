import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Avatar } from '@material-ui/core';
import Starter from '../assests/starters.jpeg';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Products() {
    const classes = useStyles();

    const handleDelete = () => {
        console.log('you clicked the chip');
    }
    return (
        <div>
            <Chip
                avatar={<Avatar alt="Natacha" src={Starter} />}
                label="Starter"
                clickable
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
            <Chip
                avatar={<Avatar alt="Natacha" src={Starter} />}
                label="Starter"
                clickable
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
            <Chip
                avatar={<Avatar alt="Natacha" src={Starter} />}
                label="Starter"
                clickable
                color="primary"
                onDelete={handleDelete}
                deleteIcon={<DoneIcon />}
            />
        </div>
    )
}


