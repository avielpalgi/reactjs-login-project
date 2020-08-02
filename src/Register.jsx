import React, { Component } from "react";
import { Row, Container, Col, Card, Button, Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { FaUndo, FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import logo from '../src/Images/logoExample.svg';
import "./Login.css";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    };
  }
  handleFirstName = (e) => {
    this.setState({
      FirstName: e.target.value,
    });
  };
  handleLastName = (e) => {
    this.setState({
      LastName: e.target.value,
    });
  };
  handleEmail = (e) => {
    this.setState({
      Email: e.target.value,
    });
  };
  handlePassword = (e) => {
    this.setState({
      Password: e.target.value,
    });
  };
  handleConfirmPassword = (e) => {
    this.setState({
      ConfirmPassword: e.target.value,
    });
  };
  SignUpFunction = () => {
      if (this.state.ConfirmPassword === this.state.Password) {
          let user = {
            FirstName:this.state.FirstName,
            LastName:this.state.LastName,
            Email:this.state.Email,
            Password:this.state.Password
        }
          localStorage.setItem('User',JSON.stringify(user))
          this.props.history.push({
            pathname: "/home/",
            state: { User:user}
        });
      }
      else{
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Please confirm your password',
            showConfirmButton: true,
            timer: 1800
        });
      }
  };
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
                <h3>Sign Up</h3>
              </Card.Header>

              <Form className="formLogin">
                <Row>
                  <Col xs="1" className="iconRegister">
                    <FaUserAlt />
                  </Col>
                  <Col xs="11">
                    <Form.Row>
                      <Form.Group as={Col} controlId="formBasicFirstName">
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          onChange={this.handleFirstName}
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formBasicLastName">
                        <Form.Control
                          type="text"
                          placeholder="Last Name"
                          onChange={this.handleLastName}
                        />
                      </Form.Group>
                    </Form.Row>
                  </Col>
                </Row>
                <Row id="rowSignUp">
                  <Col xs="1" className="iconRegister">
                    <FaEnvelope />
                  </Col>
                  <Col xs="11">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email address"
                        onChange={this.handleEmail}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs="1" className="iconRegister">
                    <FaLock />
                  </Col>
                  <Col xs="11">
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={this.handlePassword}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs="1" className="iconRegister">
                    <FaLock />
                  </Col>
                  <Col xs="11">
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                      id='passwordConf'
                        onChange={this.handleConfirmPassword}
                        type="password"
                        placeholder="Confirm Password"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Col className="btnSignIn">
                  <Button
                    variant="primary"
                    type="button"
                    className="btn"
                    onClick={this.SignUpFunction}
                  >
                    Sign Up
                  </Button>
                </Col>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withRouter(Register);
