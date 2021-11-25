import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';


const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])

    const matchDetails = details.find(de => de.id == serviceId);
    console.log(details.id);
    return (

        <div className="details">
            <h1>Details Here</h1>

            <img src={matchDetails?.img} alt="" />
            <h1>{matchDetails?.name}</h1>



            <Row xs={1} md={2} className="g-4 details-container  ">


                <Col>
                    <Card className="shadow ">
                        <Card.Img variant="top" src={matchDetails?.image} />
                        <Card.Body>
                            <Card.Title>{matchDetails?.name}</Card.Title>
                            <Card.Text>
                                Price : $ {matchDetails?.price}


                            </Card.Text>
                            <Card.Text>

                                Time :  {matchDetails?.time} Hours

                            </Card.Text>
                            <Card.Text>

                                {matchDetails?.discription}

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

        </div>
    );
};

export default ServiceDetails;