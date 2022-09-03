import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ProductInListInfo from './ProductInListInfo';

const ProductInListDetails = (props) => {
    const item = props.item;

    const classes = useStyles();
    return (
        <>
            <h6 className={classes.title}>{item.name}</h6>
            <div className="d-flex mt-2">
                <ProductInListInfo type="Color" chosen="blue" color={item.color} />
                <ProductInListInfo type="Size" chosen="XL" />
            </div>

            <h5 className="mt-2">{item.price} $</h5>
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: '16px',
        color: theme.colors.black,
    },
}));

export default ProductInListDetails;
