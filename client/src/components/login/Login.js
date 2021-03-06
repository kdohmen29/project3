import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import API from "../../utils/API";
import PreviewList from "../AudioList/PreviewList";
import Signup from "../signup";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  Modal
} from "reactstrap";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      redirectTo: null,
      audios: [],
      modal: false,
      validate: {
        emailState: ""
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handlePreview = async randomRating => {
    // Random preview
    let ratings = [4, 4.2, 4.4, 4.5];
    randomRating = ratings[Math.floor(Math.random() * ratings.length)];

    const response = await API.loginSounds(randomRating);
    console.log(response);

    this.setState({
      audios: response.data.results
    });
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  validateEmail(e) {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/user/login", {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);

        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username,
            userId: response.data._id,
            name: response.data.name
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }

  render() {
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div className="bg-login">
          <div className="login-page-div">
            <div className="btn-inline">
              <Button
                className="form-toggle"
                color="warning"
                onClick={this.toggle}
                style={{ marginBottom: "1rem" }}
                size="lg"
              >
                Login
              </Button>
              <Signup />
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <Container className="signInForm">
                  <h2 className="text-center mb-3">
                    <i className="mr-2 fas fa-sign-in-alt" />
                    Log In
                    <button
                      type="button"
                      onClick={this.toggle}
                      className="close"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </h2>

                  <Form className="form">
                    <Col>
                      <FormGroup>
                        <Label for="exampleusername">Email</Label>
                        <Input
                          className="form-input"
                          type="username"
                          id="username"
                          name="username"
                          placeholder="user@email.com"
                          valid={
                            this.state.validate.emailState === "has-success"
                          }
                          invalid={
                            this.state.validate.emailState === "has-danger"
                          }
                          value={this.state.email}
                          onChange={e => {
                            this.validateEmail(e);
                            this.handleChange(e);
                          }}
                        />
                        <FormFeedback valid>
                          That's a valid looking email you've got there.
                        </FormFeedback>
                        <FormFeedback>Please input a valid email.</FormFeedback>
                      </FormGroup>
                    </Col>

                    <Col>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                          className="form-input"
                          placeholder="password"
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                        />
                        <FormFeedback>Uh oh! Wrong password.</FormFeedback>
                      </FormGroup>
                    </Col>
                    <Button
                      className="btn"
                      color="primary"
                      onClick={this.handleSubmit}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                </Container>
              </Modal>
            </div>
          </div>
          <div className="prev-headline">
            Once logged in, a user can customize searches, download sounds, and
            save playlists.
          </div>
          <div className="login-content">
            <Button
              className="preview-button btn-warning border-dark"
              onClick={this.handlePreview}
            >
              Preview random sounds!
            </Button>
            <PreviewList className="prev-content" audios={this.state.audios} />
          </div>
        </div>
      );
    }
  }
}

export default LoginForm;
