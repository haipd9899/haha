import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import ButtonBlock from 'Components/Buttons/ButtonBlock';
import { Link } from 'react-router-dom';
import Url from 'Paths';

const CartCheckout = ({ items }) => {
    console.log('haha:', items);
    let Subtotal = items.reduce((prev, item) => prev + (item.price * item.qty), 0);

    const classes = useStyles();
    return (
        <div
            className={clsx(classes.checkout, {
                'w-100  ': true,
            })}
        >
            <h5>Checkout Summary</h5>
            <div className="d-flex mt-3">
                <p>Subtotal:</p>
                <p className="ml-auto">{parseFloat(Subtotal).toFixed(2)}$</p>
            </div>
            <div className="d-flex ">
                <p>Shipping:</p>
                <p className="ml-auto">1.5$</p>
            </div>
            <div className="d-flex mt-4">
                <h6>Total:</h6>
                <h6 className="ml-auto">{parseFloat(parseFloat(Subtotal).toFixed(2) + parseFloat(1.5))}$</h6>
            </div>
            <div className="mt-3">
                <ButtonBlock as={Link} to={Url.Checkout} text="Proceed to checkout" />
            </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    checkout: {
        padding: 16,
        background: '#fff',
        minHeight: 200,
        color: theme.colors.black,
        borderRadius: 10,
        '& h6': {
            fontWeight: 700,
        },
    },
}));

export default CartCheckout;
