import React from 'react';

const Trainer = ({ trainer }) => {
    const { name, img, Skills } = trainer;
    return (

        <div className="col-lg-4  col-sm-6  col-12">

            <img src={img} alt="" />
            <h2>{name}</h2>
            <p className="text-danger">{Skills}</p>
        </div>


    );
};

export default Trainer;