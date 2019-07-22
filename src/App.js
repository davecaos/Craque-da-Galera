import React, { Component } from 'react';
import Player from './Player/Player';
import Score from './Score/Score';
import Time from'./Time/Time';
import Commentator from './Commentator/Commentator'

class Buttons extends React.Component {
  render(){
    return(
      <div>
        <button className="nes-btn is-primary" id='playButton' onClick={this.props.playVideo}>Play!</button>

      </div>
    );
  }
}

class App extends Component {

   constructor(){
     super();
     this.state = {
       video : "/stubasa_run.mp4"
     }
   }


  playVideo() {
    this.refs.vidRef.play();
  }

  render() {
    return (
      <div style={{display: "flex", flexDirection: 'column', justifyContent: 'flex-start'}}>
        <div className="nes-container is-rounded is-dark">
          Oliver Atom
        </div>
        <video ref="vidRef" src={process.env.PUBLIC_URL + this.state.video } type="video/mp4"/>
        <Buttons playVideo={this.playVideo.bind(this)} />
      <div style={{display: "flex", flexDirection: 'row',  justifyContent: 'flex-start'}}>
        <Player/>
        <div style={{display: "flex", flexDirection: 'column'}}>
          <Time/>
          <Score localName={'ARG'} visitorName={'BRA'} />
        </div>
        <div style={{display: "flex", flexDirection: 'column'}}>
        <Commentator/>
        </div>
        </div>
      </div>
     
    );
  }
}

export default App;
