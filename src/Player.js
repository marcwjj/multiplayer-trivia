import { Component } from "react";
import './Player.css';
import Chip from '@material-ui/core/Chip';
import {Chat} from '@material-ui/icons';

// Stateless Functional Components
function Counter(props) {
    return (
      <div className="counter">
          <div hidden={!props.isHost}> 
            <button className="counter-action decrement" onClick={function () { props.onChange(-1); }}> - </button>
        </div>
        <div className="counter-score"> {props.score} </div>
        <div hidden={!props.isHost}> 
            <button className="counter-action increment" hidden={!props.isHost} onClick={function () { props.onChange(+1); }}> + </button>
            </div>
      </div>
    );
  }
  
  // Counter.propTypes = {
  //   score: PropTypes.number.isRequired,
  //   onChange: PropTypes.func.isRequired
  //   //  initialScore: PropTypes.number.isRequired    // setting the initial player score stated in the PLAYERS array
  
  // };

class Player extends Component {
    render() {
        let colors = ['primary', 'default', 'default'];
        let sizes = ['medium', 'small', 'small'];
        return (
        <div className="player">
            <div className="player-container">
                <div hidden={!this.props.isLeader} className="leader-icon">👑</div>
                <div className="player-name">
                {/* <a className="remove-player" onClick={this.props.onRemove}> X </a> */}
                <img src={this.props.photoURL} className="player-photo" ></img>
                {this.props.name}
                <Chat className="chat-icon" />
                </div>
                <div className="message-chips">
                    {this.props.messages ?  
                        this.props.messages.messages.map((message, index) => {
                            return (<Chip label={message} size={sizes[index]} 
                                color={colors[index]} className={"chip-" + index}></Chip> )
                        }) : ''
                    }
                </div>
                {/* {this.props.messages && this.props.messages.lastTimestamp} */}
            </div>
            <div className="player-score">
            <Counter score={this.props.score} onChange={this.props.onScoreChange} isHost={this.props.isHost}/>
            </div>
        </div>
    
        );
    }
  
  // Player.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   score: PropTypes.number.isRequired,
  //   onScoreChange: PropTypes.func.isRequired,
  //   onRemove: PropTypes.func.isRequired
  // };
}

export default Player;