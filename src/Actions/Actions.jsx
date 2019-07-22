import React from 'react';

const SimpleList = (list) => (
    <ul>
      {list.map(function(item) {
        return <li key={item}>{item}</li>;
      })}
    </ul>

);

let status = {
    stamina : 0,
    dribble: 0,
    passe : 0,
    shot:0
}

class  Actions extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            actions : this.props.actions,
            status : this.props.status

        }
    }



    render(){

        return( 
            <div>
                <div className="nes-container is-rounded is-dark with-title">
                <p className="title">Actions</p>
                {SimpleList(this.actions)}
                </div>
                <div className="nes-container is-rounded is-dark with-title">
                <p className="title">Player Name</p>
                {SimpleList(this.status)}
                </div>
            </div>
        );

    }

}

export default Actions;