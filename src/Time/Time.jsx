
import React from 'react';

const  firstTime = "1st"
const  secondTime = "2nd"

class  Time extends React.Component {

    

    constructor(props){

        super(props);

        this.state = {
            time : (this.props.firstTime || firstTime),
            minutes :  30,
            seconds : 0,

        }

        this.intervalHandle = () => {};
        this.secondsRemaining = 60 *30
        this.handleChange = this.handleChange.bind(this);
        this.startCountDown = this.startCountDown.bind(this);
        this.tick = this.tick.bind(this);

        
    }
    handleChange(event) {
        this.setState({
             minutes: event.target.value
        })
    }

    tick() {

        var min = Math.floor(this.secondsRemaining / 60);
        var sec = this.secondsRemaining - (min * 60);
        
        this.setState({
          minutes: min,
          seconds: sec
        })
        
        if (sec < 10) {
          this.setState({
            seconds: "0" + this.state.seconds,
          })
        }
        
        if (min < 10) {
        
        this.setState({
          value: "0" + min,
         })
        }
        
        if (min === 0 & sec === 0) {
        clearInterval(this.intervalHandle);
        }
        
        this.secondsRemaining--
        
        }
        
        startCountDown() {
        
        this.intervalHandle = setInterval(this.tick, 1000);
        
        let time = this.state.minutes;
        
        this.secondsRemaining = time * 60;
        
        }

        componentWillMount(){
            this.startCountDown();
        }

        run(){
            this.intervalHandle = setInterval(this.tick, 1000);
            let time = this.state.time;
        this.secondsRemaining = time * 60;
        }

    render(){

        return( 
        <div className="nes-container is-rounded is-dark with-title">
            <p className="title">{ this.state.time}</p>
            {this.state.minutes}:{this.state.seconds}
          
        </div>
        );

    }

}

export default Time;