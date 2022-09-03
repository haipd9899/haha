import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonRound from 'Components/Buttons/ButtonRound';

const ProductInList = (props) => {
    const classes = useStyles();
    const onDelete = (id) => {
        console.log('id:', id);
    };
    return (
        <div className={classes.delete}>
            <ButtonRound
                size="28px"
                icon="/icons/trash.svg"
                background="transparent"
                onClick={() => props.Delete(props.id)}
            />
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    delete: {
        marginLeft: '-4px',
    },
}));

export default ProductInList;
