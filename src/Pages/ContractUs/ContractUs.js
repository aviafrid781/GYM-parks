import React from 'react';
import { Button, Input } from 'react-bootstrap';
import { Form } from 'react-bootstrap/cjs';
import './Contract.css'

const ContractUs = () => {
    return (
        <div className="contract">
            <p className="feedback">We will Feed Back as soon as Possible</p>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control type="text" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Write message</Form.Label>
                    <Form.Control as="textarea" rows={7} />
                </Form.Group>
                <Button variant="success">Sand</Button>{' '}
            </Form>




        </div>


    );
};

export default ContractUs;