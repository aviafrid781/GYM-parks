import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, id, img, discription } = service;
    return (
        <div id="services" className="service pb-3">
            <img with="500px" h eight="350px" src={img} alt="" />
            <h1>Name : {name}</h1>

            <p className="px-5" >{discription}</p>
            <Link to={`/details/${id}`}>
                <button className="btn btn-warning">Details {name.toLowerCase()}</button>

            </Link>


        </div>
    );
};

export default Service;