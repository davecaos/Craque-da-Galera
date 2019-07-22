import React from 'react';
import {speach} from './speach.js'
var util = require( "util" );
var str =  util.format( "Friend with id [%s] does not match given id [%s].",5, 5)

class  Commentator extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            local: 0,
            visitor: 0,

        }
    }


    render(){

        return( 
            <div style={{display: "flex",justifContent: 'flex-end'}}>
            <img src={process.env.PUBLIC_URL + "/commentatore.JPG"} alt=""/>
            <div className="nes-container is-rounded is-dark">
              
                <p>wqwq{speach.pass.vars}</p>
             </div>
             </div>
        );

    }

}

export default Commentator;