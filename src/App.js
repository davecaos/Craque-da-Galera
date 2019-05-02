import React, { Component } from 'react';
import Player from './Player/Player';

class Buttons extends React.Component {
  render(){
    return(
      <div>
        <button id='playButton' onClick={this.props.playVideo}>Play!</button>

      </div>
    );
  }
}

class App extends Component {



  playVideo() {
    this.refs.vidRef.play();
  }

  render() {
    return (
      <div className="nes-container is-rounded is-dark">
       <div class="nes-container is-rounded is-dark" style={{ maxWidth: '20%', maxHeight: '5%' }}>
          Oliver Atom
        </div>
      <video ref="vidRef" src={process.env.PUBLIC_URL + "/stubasa_run.mp4"} type="video/mp4"></video>
      <div>
      <Buttons playVideo={this.playVideo.bind(this)} />
      </div>
        <Player/>
        <div class="nes-container is-rounded is-dark" style={{ maxWidth: '7%', maxHeight: '7%' }}>
          ARG 1.<p></p>
          BRA 1.
        </div>
        <div className="nes-container is-rounded is-dark">
          <p>{" El taco, no. Hace la personal y se va. Se va. Se va Martínez para el gol, y va el tercero y va el tercero y gol de River, gol de River, gol de River."}</p>
        </div>
      </div>
     
    );
  }
}

export default App;
