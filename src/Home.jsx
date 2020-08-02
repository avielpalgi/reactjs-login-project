import React, { Component } from "react";
import {
    BrowserRouter,
    Route,
    Link,
    withRouter,
    Switch,
  } from "react-router-dom";
  import { Row, Container, Col, Card, Button, Form } from "react-bootstrap";
  import '../src/Home.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {FirstName:'',LastName:''},
    };
  }

  componentWillMount(){
    if (this.props.location.state !== undefined) {
        console.log(this.props.location.state)
      this.setState({
        user: this.props.location.state.User,
      });
    }
    else{
        console.log(this.props.location)
    }
  }
 logout=()=>{
    localStorage.removeItem('User');
    this.props.history.push({
        pathname:'/'
     })
    }
  render() {
     let user =this.state.user;
  return (
  <Container className="containerHome">
      <Row className="titleHome"><h3>Hello {user.FirstName} {user.LastName}</h3></Row>
      <Row className='btnLogout'><Button onClick={this.logout}>Logout</Button></Row>
  </Container>);
  }
}
export default withRouter(Home);
