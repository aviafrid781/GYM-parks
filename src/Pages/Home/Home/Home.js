import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Service';
import Trainers from '../Trainers/Trainers';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Trainers></Trainers>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;