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





//https://freesound.org/apiv2/search/text/?query=piano&token=x5Hs2Kk9Jn3YjFmKB8A9hj9fue9bjFGnid4ua53j

// var seachTerm = "piano"

// $.get(`https://freesound.org/apiv2/search/text/?query=${seachTerm}&token=x5Hs2Kk9Jn3YjFmKB8A9hj9fue9bjFGnid4ua53j`, function(data){
//     console.log(data);  
// })

// var audioElement

// $.get('https://freesound.org/apiv2/sounds/186942/?fields=previews&token=x5Hs2Kk9Jn3YjFmKB8A9hj9fue9bjFGnid4ua53j', function(data){
//     console.log(data.previews[`preview-hq-mp3`]);  
//     audioElement = document.createElement("audio");
//     audioElement.setAttribute("muted", 'muted');
//     audioElement.setAttribute("src", data.previews[`preview-hq-mp3`]);
// })

// $('#play-music').on('click', function(){
//     audioElement.play();
// })
