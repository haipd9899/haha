import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Divider from '../Components/Divider';
import CatalogFilterDepartment from './CatalogFilterDepartment';
import CatalogFilterColors from './CatalogFilterColors';
import CatalogFilterPrice from './CatalogFilterPrice';
import CatalogFilterSizes from './CatalogFilterSizes';

const CatalogFilter = () => {
    const classes = useStyles();
    return (
        <div className={classes.filterContainer}>
            <CatalogFilterDepartment clothingTypes={clothingTypes} />
            <Divider />
            <CatalogFilterColors />
            <Divider />
            <CatalogFilterPrice />
            <Divider />
            <CatalogFilterSizes sizes={sizes} />
        </div>
    );
};

const clothingTypes = [
    { name: 'Originals', value: 'originals' },
    { name: 'Thể thao', value: 'thethao' },
    { name: 'Bóng đá', value: 'bongda' },
    { name: 'Bóng rổ', value: 'bongro' },
    { name: 'Quần vợt', value: 'quanvot' },
    { name: 'Chạy', value: 'chay' },
];

const sizes = [41, 42, 43, 44, 45, 46, 47, 48];

const useStyles = makeStyles((theme) => ({
    filterContainer: {
        padding: 16,
    },
}));

export default CatalogFilter;
