function Data(id, name, color, category, subCategory, price, img) {
    function createData(id, name, color, category, subCategory, price, img) {
        return {
            id,
            name,
            color,
            category,
            subCategory,
            price,
            img,
        };
    }

    return createData(id, name, color, category, subCategory, price, img);
}

export const products = [
    Data(1, "Men's Adidas Sports pants", 'grey', 'giay_nam', 'pants', 53.99, ["Men's Adidas Sports pants1.jpg"]),
    Data(2, 'sport-top', 'grey', 'giay_nam', 'tops&tees', 53.5, ['sport-top1.jpg']),
    Data(3, 'women-winter-jacket', 'white', 'giay_nu', 'jackets&coats', 29, ['women-winter-jacket1.jpg']),
    Data(4, 'Shoe-Nike-nizza', 'white', 'giay_nam', 'shoes', 69.99, ['Shoe-Nike-nizza1.jpg']),
    Data(5, 'kids-autumn-jacket', 'white', 'giay_tre_em', 'jackets&coats', 23.99, ['kids-autumn-jacket1.jpg']),
    Data(6, 'kids-Winter-coat', 'white', 'giay_tre_em', 'jackets&coats', 17.99, ['kids-Winter-coat1.jpg']),
    Data(7, 'kids-Socks', 'white', 'giay_tre_em', 'accessories', 7.0, ['kids-Socks1.jpg']),
    Data(8, 'kids-warm-jacket', 'white', 'giay_tre_em', 'jackets&coats', 13.5, ['kids-warm-jacket1.jpg']),
    Data(9, 'men-Breathable-Casualshoes', 'black', 'giay_nam', 'shoes', 21.99, ['men-Breathable-CasualShoes1.jpg']),
    Data(10, 'men-jewelry-leatherbracelet', 'black', 'giay_nam', 'accessories', 9.99, [
        'men-jewelry-leatherbracelet1.jpg',
    ]),
    Data(11, 'men-jexxi-ring', 'white', 'giay_nam', 'accessories', 45.99, ['men-jexxi-ring1.jpg']),
    Data(12, 'Men-Leather-shoes', 'black', 'giay_nam', 'shoes', 69.99, ['Men-Leather-Shoes1.jpg']),
    Data(13, 'men-pants-casual', 'grey', 'giay_nam', 'pants', 13.99, ['men-pants-casual1.jpg']),
    Data(14, 'shoe-women-casual', 'white', 'giay_nu', 'shoes', 119.99, ['shoe-women-casual1.jpg']),
    Data(15, 'women-adidas-pants', 'white', 'giay_nu', 'pants', 19.99, ['women-adidas-pants1.jpg']),
    Data(16, 'women-jewelry-bracelet', 'white', 'giay_nu', 'accessories', 69.0, ['women-jewelry-bracelet1.jpg']),
    Data(17, 'women-jewelry-silverbracelet', 'white', 'giay_nu', 'accessories', 69.99, [
        'women-jewelry-silverbracelet1.jpg',
    ]),
    Data(18, 'women-Sterling-Silver-Necklace-owl', 'white', 'giay_nu', 'accessories', 25.99, [
        'women-Sterling-Silver-Necklace-owl1.jpg',
    ]),
    Data(19, 'women-top', 'white', 'giay_nu', 'tops&tees', 35.99, ['women-top1.jpg']),
    Data(20, 'blue-shirt', 'blue', 'giay_nam', 'shirts', 35.99, ['blue-shirt1.jpg']),
    Data(21, 'dark-blue-shirt', 'blue', 'giay_nam', 'shirts', 35.99, ['dark-blue-shirt1.jpg']),
    Data(22, 'sweatshirt', 'white', 'giay_nam', 'hoodies&sweatshirts', 35.99, ['sweatshirt1.jpg']),
    Data(23, 'blue-sweatshirt', 'blue', 'giay_nam', 'hoodies&sweatshirts', 35.99, ['blue-sweatshirt1.jpg']),
    Data(24, 'dark-blue-sweatshirt', 'white', 'giay_nam', 'hoodies&sweatshirts', 35.99, ['dark-blue-sweatshirt1.jpg']),
    Data(25, 'white-shirt', 'white', 'giay_nam', 'hoodies&sweatshirts', 35.99, ['white-shirt1.jpg']),
    Data(26, 'black-top', 'white', 'giay_nam', 'tops&tees', 35.99, ['black-top1.jpg']),
    Data(27, 'Parkas-Hooded-coat', 'white', 'giay_nam', 'jackets&coats', 35.99, ['Parkas-Hooded-coat1.jpg']),
    Data(28, 'puma-coat', 'white', 'giay_nam', 'jackets&coats', 35.99, ['puma-coat1.jpg']),
    Data(29, 'Alpinestars-Winter-Jacket', 'white', 'giay_nam', 'jackets&coats', 35.99, [
        'Alpinestars-Winter-Jacket1.jpg',
    ]),
    Data(30, 'Hip-Hop-Streetwear', 'white', 'giay_nam', 'jackets&coats', 35.99, ['Hip-Hop-Streetwear1.jpg']),
    Data(31, 'Men-Joggers-Oversize', 'white', 'giay_nam', 'pants', 35.99, ['Men-Joggers-Oversize1.jpg']),
    Data(32, 'Vangull-Leather-Jacket', 'white', 'giay_nu', 'jackets&coats', 35.99, ['Vangull-Leather-Jacket1.jpg']),
    Data(33, 'hooded-Coats-Casual', 'white', 'giay_nu', 'jackets&coats', 35.99, ['hooded-Coats-Casual1.jpg']),
    Data(34, 'red-autumn-hoodie', 'white', 'giay_nu', 'hoodies&sweatshirts', 35.99, ['red-autumn-hoodie1.jpg']),
    Data(35, 'Elegant-Drawstring-Sweet', 'white', 'giay_nu', 'hoodies&sweatshirts', 35.99, [
        'Elegant-Drawstring-Sweet1.jpg',
    ]),
    Data(36, 'grey-Oversize-Hooded', 'white', 'giay_nu', 'hoodies&sweatshirts', 35.99, ['grey-Oversize-Hooded1.jpg']),
    Data(36, 'Gothic-Pants-Plaid', 'white', 'giay_nu', 'pants', 35.99, ['Gothic-Pants-Plaid1.jpg']),
    Data(36, 'Harajuku-Ladies-Joggers', 'white', 'giay_nu', 'pants', 35.99, ['Harajuku-Ladies-Joggers1.jpg']),
    Data(36, 'Ladies-Office-Work-Pants', 'white', 'giay_nu', 'pants', 35.99, ['Ladies-Office-Work-Pants1.jpg']),
    Data(36, 'High-Heels-Party', 'white', 'giay_nu', 'shoes', 35.99, ['High-Heels-Party1.jpg']),
    Data(36, 'Shirt-Ladies-Floral', 'white', 'giay_nu', 'shirts', 35.99, ['Shirt-Ladies-Floral1.jpg']),
    Data(36, 'Office-Lady-Blouse', 'white', 'giay_nu', 'shirts', 35.99, ['Office-Lady-Blouse1.jpg']),
    Data(36, 'Autumn-Chiffon-Blouse', 'white', 'giay_nu', 'shirts', 35.99, ['Autumn-Chiffon-Blouse1.jpg']),
    Data(36, 'Spring-Lace-Hollow', 'white', 'giay_nu', 'tops&tees', 35.99, ['Spring-Lace-Hollow1.jpg']),
];
