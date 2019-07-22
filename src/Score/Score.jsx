
import React from 'react';

class  Score extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            local: 0,
            visitor: 0,

        }
    }


    render(){

        return( 
        <div className="nes-container is-rounded is-dark" >
          {this.props.localName} {this.state.local}<p></p>
          {this.props.visitorName} {this.state.visitor}
        </div>
        );

    }

}

export default Score;