import React, { Component } from 'react'
import { Row, Container, Col, Card, Button, Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { FaUndo } from "react-icons/fa";
import "./Login.css";
import logo from '../src/Images/logoExample.svg';

 class Reset extends Component {
     constructor(){
         super();
         this.state={
             
         }
     }
    render() {
        return (
            <Container>
            <Row>
            <Col className="colLogo" sm="12"><img alt='logo' src={logo} /></Col>
              <Col sm="6" className="colSignIn">
                <Card className="CardSignIn">
                  <Card.Header className="headerCard">
                  <div>
                  <Link to="/">
                    <FaUndo />
                  </Link>
                </div>
                    <h3>Reset Password</h3>
                  </Card.Header>
                  <Form className="formLogin reset">
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Enter your email address to reset your password</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>
                    <Col className="btnSignIn">
                      <Button variant="primary" type="button" className="btn">
                       Reset
                      </Button>
                    </Col>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        )
    }
}
export default withRouter(Reset)
