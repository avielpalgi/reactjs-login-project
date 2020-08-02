import React, { Component } from "react";
import { Row, Container, Col, Card, Button, Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";
import Facebook from "./facebook";
import Google from "./google";
import logo from '../src/Images/logoExample.svg';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      rememberMe: false,
    };
  }
  componentDidMount(){
    if (localStorage.getItem('remember') !== null) {
      let remember = JSON.parse(localStorage.getItem('remember'));
      this.setState({
        Email:remember.Email,
        Password:remember.Password,
        rememberMe:true
      })
    }
  }

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

  RememberMe = () => {
    if (!this.state.rememberMe) {
      this.setState({ rememberMe: true });
      let remember = {
        Email: this.state.Email,
        Password: this.state.Password,
      };
      localStorage.setItem("remember", JSON.stringify(remember));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Password and Email are saved",
        showConfirmButton: false,
        timer: 1200,
      });
    } else {
      this.setState({ rememberMe: false });
      localStorage.removeItem('remember');
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Password and Email are not saved",
        showConfirmButton: false,
        timer: 1200,
      });
    }
  };

  LoginFunction=()=>{
    if (localStorage.getItem('User') !== null) {
      let User = JSON.parse(localStorage.getItem('User'))
      if (User.Email === this.state.Email && User.Password === this.state.Password) {
        this.props.history.push({
          pathname: "/home/",
          state: { User:User}
      });
      }
      else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Email or Password are wrong',
          showConfirmButton: true,
          timer: 1800
      });
      }
    }
    else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Email or Password are wrong',
        showConfirmButton: true,
        timer: 1800
    });
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
                <h3>Sign In</h3>
              </Card.Header>
              <Form className="formLogin">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    id="EmailForm"
                    type="email"
                    placeholder="Enter email"
                    value={this.state.Email}
                    onChange={this.handleEmail}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    id="PasswordForm"
                    type="password"
                    placeholder="Enter Password"
                    value={this.state.Password}
                    onChange={this.handlePassword}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                  checked={this.state.rememberMe}
                    type="checkbox"
                    label="Remember me"
                    onChange={this.RememberMe}
                  />
                </Form.Group>
                <Col className="btnSignIn">
                  <Button variant="primary" type="button" className="btn" onClick={this.LoginFunction}>
                    Sign In
                  </Button>
                </Col>
                <div className="or-seperator">
                  <i>or</i>
                </div>
                <Row className="FacebookGoogleRow">
                  <Col lg="6" md="6" sm="12" className="facebook">
                    <Facebook />
                  </Col>
                  <Col lg="6" md="6" sm="12" className="google">
                    <Google />
                  </Col>
                </Row>

                <Row className="footerCardLogin">
                  <Col lg="6" md="6" sm="6" xs="6" className="forgot">
                    <p className="font-small blue-text">
                      <Link to="/reset">Forgot Password?</Link>
                    </p>
                  </Col>
                  <Col lg="6" md="6" sm="6" xs="6" className="signup">
                    <p className="font-small grey-text">
                      Not a member?
                      <Link to="/register">SignUp</Link>
                    </p>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default withRouter(Login);
