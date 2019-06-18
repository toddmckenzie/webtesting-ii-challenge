import React from 'react';


class Display extends React.Component {
    constructor(props){
        super(props);
        
    }
    

    render() {
        return (
            <>
            <h1>Count</h1>
            <h3>Strikes: {this.props.strikes}</h3>
            <h3>Balls: {this.props.balls}</h3>
            </>
        )
    }
}

export default Display;