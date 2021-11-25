import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 pt-5"
                        src={'https://s3.envato.com/files/198837535/2.jpg'}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <h3>Welcome to GYM PARK</h3>
                        <p>Make perfect In your Success</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://www.fotojet.com/template-imgs/social-media-header/facebook-cover/sport-fitness.jpg'}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to GYM PARK</h3>
                        <p>Make perfect Body</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'https://timelinecovers.pro/facebook-cover/download/gym-one-more-facebook-cover.jpg'}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to GYM PARK</h3>
                        <p>Make A Stronger Body</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Banner;