import React from 'react';
import { Button } from 'react-bootstrap';
import { CardGroup } from 'react-bootstrap/cjs';
import { Card } from 'react-bootstrap/cjs';
import './package.css'

const Package = () => {
    return (

        < div className="form-container">
            <CardGroup>
                <Card>

                    <Card.Body>
                        <Card.Header style={{ color: 'red' }}>Weekly Package</Card.Header>

                        <Card.Title>5% discount</Card.Title>
                        <Card.Text>
                            It is vary Good for sort weekly agreement.to get dis discount please contract us
                        </Card.Text>
                        <Button variant="success">Purchase</Button>{' '}

                    </Card.Body>


                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <br />
                <Card>

                    <Card.Body>
                        <Card.Header style={{ color: 'red' }} >Monthly Package</Card.Header>

                        <Card.Title>10% discount</Card.Title>
                        <Card.Text>
                            If you want to get this .You will be 5% discount ,please contract us
                        </Card.Text>
                        <Button variant="success">Purchase</Button>{' '}

                    </Card.Body>

                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <br />
                <Card>

                    <Card.Body>
                        <Card.Header style={{ color: 'red' }}>1 Year Package</Card.Header>

                        <Card.Title>50% discount </Card.Title>
                        <Card.Text>
                            If you purchase this.You will be more helpfull.There are more discount
                        </Card.Text>
                        <Button variant="success">Purchase</Button>{' '}

                    </Card.Body>

                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>


            </CardGroup>
            <br />

            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header style={{ color: 'red' }}>Special discount </Card.Header>
                <Card.Body>
                    <Card.Title>For Female person</Card.Title>
                    <Card.Text>
                        if you want please contract us for this package
                    </Card.Text>
                    <Button variant="success">Purchase</Button>{' '}

                </Card.Body>



            </Card>
            <br />

            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header style={{ color: 'red' }}>Student Discount </Card.Header>
                <Card.Body>
                    <Card.Title>For Studant 10% discoumt</Card.Title>
                    <Card.Text>
                        if You are interest ,Please Contract us
                    </Card.Text>
                    <Button variant="success">Purchase</Button>{' '}

                </Card.Body>

            </Card>
            <br />



        </div>

    );
};

export default Package;