import React from 'react';
import Display from './display';

class Dashboard extends React.Component {
    state = {
        balls: 0,
        strikes: 0
    }

    addStrike = (e) => {
       e.preventDefault();
       let strikes = this.state.strikes;
       console.log(strikes)
       if (this.state.strikes === 2) {
           this.setState({ balls: 0, strikes: 0})
       } else {
           this.setState({
               ...this.state.strikes,
               strikes: strikes + 1
           })
       }
    };
        
    addBall = (e) => {
        e.preventDefault();
        
        let balls = this.state.balls;
        console.log(balls)
        if (this.state.balls === 3){
            this.setState({ balls: 0, strikes: 0})
        } else {
            this.setState({
                ...this.state,
                balls: balls + 1
            })
        }
    };

    foulBall = (e) => {
        e.preventDefault();
        let strikes = this.state.strikes;
        if (strikes < 2) {
            this.setState({
                ...this.state,
                strikes: strikes + 1
            })
        }
        console.log(this.state.strikes, this.state.balls)
    }

    hit = (e) => {
        e.preventDefault();
        this.setState({
            strikes: 0,
            balls: 0
        })
    }
    


    render() {
        return (
            <>
                <button onClick={this.addStrike}>Strike</button>
                <button onClick={this.addBall}>Ball</button>
                <button onClick={this.foulBall}>Foul</button>
                <button onClick={this.hit}>Hit</button>
                <Display strikes={this.state.strikes} balls={this.state.balls}/>
            </>
        )
    }
}

export default Dashboard;