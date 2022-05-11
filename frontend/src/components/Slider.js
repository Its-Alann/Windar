import React from "react";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import "../components/Slider.css"

const Slider = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Carousel className="Carousel">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://dummyimage.com/940x478/000/fff"
                                alt="First slide"
                                />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://dummyimage.com/940x478/010/fff"
                                alt="Second slide"
                                />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://dummyimage.com/940x478/020/fff"
                                alt="Third slide"
                                />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>     
        </Container>
    );
}

export default Slider;