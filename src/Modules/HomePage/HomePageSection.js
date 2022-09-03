import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SectionBlock from 'Components/SectionBlock/SectionBlock';
import Url from 'Paths';

const HomePageSection = () => {
    return (
        <Container className="mt-5">
            <Row>
                <Col className="mb-3" xs={12} md={4}>
                    <SectionBlock
                        address={`${Url.HOME}/Giay_nam`}
                        text="giay_nam"
                        img="/images/homepage/menSection.png"
                    />
                </Col>
                <Col className="mb-3" xs={12} md={4}>
                    <SectionBlock
                        address={`${Url.HOME}/Giay_nu`}
                        text="Giay_nu"
                        img="/images/homepage/womenSection.png"
                    />
                </Col>
                <Col className="mb-3" xs={12} md={4}>
                    <SectionBlock
                        address={`${Url.HOME}/Giay_tre_em`}
                        text="Giay_tre_em"
                        img="/images/homepage/kidSection.png"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePageSection;
