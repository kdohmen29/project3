import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Home extends Component {
  state = {
    message: ""
  };

  componentDidMount() {
  }
  buttonClicked = (e) => {
    API.authSpotify().then((res)=>{
      this.setState({ message: res.data });
    })
  }

  render() {

    return (
      <div>
        <button onClick={this.buttonClicked}>Test button</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Home;
