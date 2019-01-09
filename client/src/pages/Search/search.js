import React, { Component } from "react";
import API from "../../utils/API";
import SearchBar from "../../components/SearchBar";
import AudioList from "../../components/AudioList";


class Search extends Component {
  state = {
    audios: []
  };

  onTermSubmit = async searchTerm => {
    const response = await API.getSounds (searchTerm);
    console.log(response);
    
    this.setState({
      audios: response.data.results
    });
  };

  render()  {
    return (
      <div>
        <SearchBar 
          onFormSubmit= {this.onTermSubmit}
        />
        <AudioList 
          audios={this.state.audios}
        />
      </div>
    )
  }
}

export default Search;


















  

  

//   getAudio = event => {
//     let audioElement
//     event.preventDefault();
//     API.getAudio ()
//       .then(res =>
//         audioElement.setAttribute("src", res.data.previews[`preview-hq-mp3`]),
//         audioElement = document.createElement("audio"),
//         // audioElement.setAttribute("muted", 'muted'),
//         audioElement.play()
//       )
//       .catch(err => console.log(err));
//   };




//   render() {
//     return ( 
//       <div>
//         <form>
//               <Input
//                 value={this.state.searchTerm}
//                 onChange={this.handleInputChange}
//                 name="searchTerm"
//                 placeholder="Title (required)"
//               />
//               <FormBtn
//                 onClick={this.handleFormSubmit}
//               >
//                 Search
//               </FormBtn>
//             </form>
//             <button 
//               onClick = {this.getAudio} 
//               id="play-music">play</button>
//       </div>
//     );
//   }
// }

// export default Search;





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