import React from "react";
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import "../components/Slider.css"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Slider = () => {

    const navigate = useNavigate();
    
    return (
        <Container>
            <Row>
                <Col>
                    <Carousel className="Carousel">
                        <Carousel.Item className="Item">
                            <img
                                className="images"
                                src="https://stormsend1.djicdn.com/tpc/uploads/carousel/image/0be4f8d506028f207a92ad7b4a45c6a8@ultra.jpg"
                                alt="DJI Mini 3 Pro"
                                />
                            <Carousel.Caption>
                                <h3>DJI Mini 3 Pro</h3>
                                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="images"
                                src="https://stormsend1.djicdn.com/tpc/uploads/carousel/image/a340a05bc5a5821f2a162370742b46e8@ultra.jpg"
                                alt="DJI Mavic 3"
                                />

                            <Carousel.Caption>
                                <h3>DJI Mavic 3</h3>
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="images"
                                src="https://stormsend1.djicdn.com/tpc/uploads/carousel/image/1f50ce8b01a883d94fb6a5198fbcfeb6@ultra.jpg"
                                alt="DJI Mini 2"
                                />

                            <Carousel.Caption>
                                <h3>DJI Mini 2</h3>
                                {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Button className="DroneSelect" variant="contained" size="medium" onClick={() => navigate("/answerpage")}>Select Drone</Button>
        </Container>

    );
}

export default Slider;