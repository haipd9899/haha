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
    Data(1, 'Giày Superstar 2.500.000', 'White', 'giay_nam', 'originals', 25.1, ['Giày Superstar.jpg']),
    Data(2, 'Giày Continental 80 2.700.000', 'white', 'giay_nu', 'originals', 29, ['Giày Continental 80.jpg']),
    Data(3, 'Giày Nizza 2.500.000', 'black', 'giay_nam', 'originals', 21.99, ['Giày Nizza.jpg']),
    Data(4, 'adiFOM SLTN 2.500.000', 'white', 'giay_nam', 'originals', 69.99, ['adiFOM SLTN.jpg']),
    Data(5, 'Giày Haiwee 1.250.000', 'white', 'giay_nam', 'originals', 23.99, ['Giày Haiwee.jpg']),
    Data(6, 'Giày Sport Pro adidas x LEGO® 2.200.000', 'yellow', 'giay_tre_em', 'thethao', 17.99, [
        'Giày Sport Pro adidas x LEGO®.jpg',
    ]),
    Data(7, 'Giày Tập Thể Thao Có Quai Dán Tensaur 1.000.000', 'white', 'giay_tre_em', 'thethao', 7.0, [
        'Giày Tập Thể Thao Có Quai Dán Tensaur.jpg',
    ]),
    Data(8, 'Giày FortaRun Sport Running Có Dây Giày Và Quai Dán 1.300.000', 'black', 'giay_tre_em', 'thethao', 13.5, [
        'Giày FortaRun Sport Running Có Dây Giày Và Quai Dán.jpg',
    ]),
    Data(9, 'Giày NMD_R1 2.880.000', 'White', 'giay_nam', 'originals', 53.5, ['Giày NMD_R1.jpg']),
    Data(10, 'ZX 8000 LEGO 3.100.000', 'yellow', 'giay_nam', 'originals', 9.99, ['ZX 8000 LEGO1.jpg']),
    Data(11, 'COPA SENSE.1 FG 5.000.000', 'yellow', 'giay_nam', 'bongda', 45.99, ['COPA SENSE.1 FG.jpg']),
    Data(12, 'ADIZERO BOSTON 11 M 3.120.000', 'yellow', 'giay_nam', 'chạy', 69.99, ['ADIZERO BOSTON 11 M.jpg']),
    Data(13, 'Giày NMD_R1 3.600.000', 'blue', 'giay_nam', 'originals', 13.99, ['Giày NMD_R11.jpg']),
    Data(14, 'Giày Ultraboost 1.0 DNA Running Sportswear Lifestyle 5.000.000', 'black', 'giay_nu', 'thethao', 119.99, [
        'Giày Ultraboost 1.0 DNA Running Sportswear Lifestyle.jpg',
    ]),
    Data(15, 'Giày Puremotion 1.900.000', 'white', 'giay_nu', 'thethao', 19.99, ['Giày Puremotion.jpg']),
    Data(16, 'Giày Galaxy 6 1.600.000', 'white', 'giay_nu', 'chạy', 69.0, ['Giày Galaxy 6.jpg']),
    Data(17, 'Giày Ozelle Lifestyle Running Cloudfoam 2.000.000', 'white', 'giay_nu', 'thethao', 69.99, [
        'Giày Ozelle Lifestyle Running Cloudfoam.jpg',
    ]),
    Data(18, 'GIÀY ULTRABOOST 22 5.200.000', 'red', 'giay_nu', 'thethao', 25.99, ['GIÀY ULTRABOOST 22.jpg']),
    Data(19, 'Giày Fluidflow 2.0 2.200.000', 'white', 'giay_nu', 'thethao', 35.99, ['Giày Fluidflow 2.0.jpg']),
    Data(20, 'Giày Pureboost 22 3.600.000', 'blue', 'giay_nam', 'chạy', 35.99, ['Giày Pureboost 22.jpg']),
    Data(21, 'Giày Tennis Barricade 4.000.000', 'blue', 'giay_nam', 'quanvot', 35.99, ['Giày Tennis Barricade.jpg']),
    Data(22, 'Giày Jeremy Scott Motorsport Wings 4.0 4.200.000', 'blue', 'giay_nam', 'originals', 35.99, [
        'Giày Jeremy Scott Motorsport Wings 4.0.jpg',
    ]),
    Data(23, 'FORUM 84 LOW 8K 5.800.000', 'blue', 'giay_nam', 'originals', 35.99, ['FORUM 84 LOW 8K.jpg']),
    Data(24, 'Giày 4D Fusio 4.640.000', 'blue', 'giay_nam', 'originals', 35.99, ['Giày 4D Fusio.jpg']),
    Data(25, 'Giày Supernova Tokyo 1.350.000', 'blue', 'giay_nam', 'chạy', 35.99, ['Giày Supernova Tokyo.jpg']),
    Data(26, 'Giày Slip-On Nizza Pride 800.000', 'red', 'giay_nam', 'originals', 35.99, [
        'Giày Slip-On Nizza Pride.jpg',
    ]),
    Data(27, 'Giày Ultraboost DNA 2.100.000', 'red', 'giay_nam', 'chạy', 35.99, ['Giày Ultraboost DNA1.jpg']),
    Data(28, 'Giày bongda Sân Cỏ Tự Nhiên Không Dây Predator Freak.3 1.200.000', 'red', 'giay_nam', 'bongda', 35.99, [
        'Giày bongda Sân Cỏ Tự Nhiên Không Dây Predator Freak 3.jpg',
    ]),
    Data(29, 'Giày Tennis Adizero Ubersonic 4 3.800.000', 'red', 'giay_nam', 'quanvot', 35.99, [
        'Giày Tennis Adizero Ubersonic 41.jpg',
    ]),
    Data(30, 'Giày Adistar 3.500.000', 'white', 'giay_nam', 'chạy', 35.99, ['Giày Adistar.jpg']),
    Data(31, 'Giày adidas Grand Court x LEGO® 2.0 1.900.000', 'white', 'giay_nam', 'thethao', 35.99, [
        'Giày adidas Grand Court x LEGO® 2.0.jpg',
    ]),
    Data(32, 'Giày Lite Racer 3.0 2.500.000', 'black', 'giay_nu', 'thethao', 35.99, ['Giày Lite Racer 3.0.jpg']),
    Data(33, 'Giày Harden Vol. 6 4.000.000', 'red', 'giay_nu', 'bongro', 35.99, ['Giày Harden Vol. 6.jpg']),
    Data(34, 'Giày Solarcontrol 3.900.000', 'red', 'giay_nu', 'chạy', 35.99, ['Giày Solarcontrol.jpg']),
    Data(35, 'Giày Ultraboost DNA 2.600.000', 'red', 'giay_nu', 'chạy', 35.99, ['Giày Ultraboost DNA.jpg']),
    Data(36, 'Giày Tennis Adizero Ubersonic 4 3.800.000', 'yellow', 'giay_nu', 'quanvot', 35.99, [
        'Giày Tennis Adizero Ubersonic 4.jpg',
    ]),
    Data(37, 'Giày Climacool Vento HEAT.RDY 1.750.000', 'yellow', 'giay_nu', 'chạy', 35.99, [
        'Giày Climacool Vento HEAT.RDY.jpg',
    ]),
    Data(38, 'ZX 8000 LEGO 3.100.000', 'yellow', 'giay_nu', 'originals', 35.99, ['ZX 8000 LEGO.jpg']),
    Data(39, 'Giày Bryony 1.680.000', 'yellow', 'giay_nu', 'originals', 35.99, ['Giày Bryony.jpg']),
    Data(40, 'Giày Dame 8 2.560.000', 'blue', 'giay_nu', 'bongro', 35.99, ['Giày Dame 8.jpg']),
    Data(41, 'Giày Forum Mid 1.400.000', 'blue', 'giay_nu', 'originals', 35.99, ['Giày Forum Mid.jpg']),
    Data(42, 'Giày SL20 1.600.000', 'blue', 'giay_nu', 'chạy', 35.99, ['Giày SL20.jpg']),
    Data(43, 'Giày Adizero Boston 9 2.170.000', 'blue', 'giay_nu', 'chạy', 35.99, ['Giày Adizero Boston 9.jpg']),
    Data(44, 'Giày Dame 8 2.560.000', 'blue', 'giay_nu', 'bongro', 35.99, ['Giày Dame 81.jpg']),
];
