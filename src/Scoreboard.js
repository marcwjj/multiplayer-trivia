import { Component, PropTypes } from 'react';
import './Scoreboard.css';
import Player from './Player.js';


let nextID = 4;

// Components

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      running: false,
      elapsedTime: 0,
      previousTime: 0
       };
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onTick = this.onTick.bind(this);

  
        this.props.database.ref('timer').on('value', (snapshot) => {
            
            if (!this.props.isHost) {
                this.setState({elapsedTime: snapshot.val().elapsed || 0});
            }
        });
  
  }

  componentDidMount = () => {
    this.interval = setInterval(this.onTick,100);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  onTick() {
    if(this.state.running) {
      let now = Date.now();  
      this.setState({
        previousTime: now,
        elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
      });

      if (this.props.isHost) {
        //   console.log('update');
      this.props.database.ref('timer').update({elapsed: this.state.elapsedTime});
      }
    }
    // console.log('onTick');
  }

  onStart() {
    this.state = {
      running: true, 
      previousTime: Date.now()
      };
    this.setState(this.state);
  };

  onStop() {
    this.state = {running: false};
    this.setState(this.state);
  };

  onReset() {
    this.state = ({
      elapsedTime: 0,
      previousTime: Date.now()
    });
    this.setState(this.state);
    if (this.props.isHost) {
        this.props.database.ref('timer').update({elapsed: this.state.elapsedTime});
        }
  };

  render() {
    let seconds = Math.floor(this.state.elapsedTime / 1000);
    // ternary conditional operator can also be used inside a JSX expression (if statements cannot)
   let startStop = this.state.running ? <button onClick={this.onStop}>Stop</button> : 
                    <button onClick={this.onStart}>Start</button>;
 
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time"> {seconds} </div>
        <div hidden={!this.props.isHost}>
        { startStop }
        <button onClick={this.onReset}>Reset</button>
        </div>
      </div>
    );
  };
}

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      name: ""
    };
    this.onNameChange = this.onNameChange.bind(this);

  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({ name: "" });
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }


  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input type="text" value={this.state.name} onChange={this.onNameChange} />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
};

// AddPlayerForm.propTypes = {
//   onAdd: PropTypes.func.isRequired
// }

function Stats(props) {
  let totalPlayers = props.players.length;
  let totalPoints = props.players.reduce(function (total, player) {
    return total + player.score;
  }, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}

// Stats.propTypes = {
//   players: PropTypes.array.isRequired
//};

function Header(props) {
  return (
    <div className="header">
      <Stats players={props.players} />
      <h1>{props.title}</h1>
      <Stopwatch database={props.database} isHost={props.isHost}/>
    </div>
  );
}

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
//   players: PropTypes.array.isRequired
// };

// ES6 Classes
// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {score: this.props.initialScore};  // Move the score from props to the state proprty
//     this.incrementScore = this.incrementScore.bind(this);
//     this.decrementScore = this.decrementScore.bind(this);
//   }
//   incrementScore() {
//     this.setState({
//       score: (this.state.score + 1)
//     });
//   }

//   decrementScore() {
//     if (this.state.score !== 0) {   // if statement so the score does not go below 0
//     this.setState({
//       score: (this.state.score - 1)
//     });
//     }
//   }


//   render() {
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//         <div className="counter-score"> {this.state.score} </div>
//         <button className="counter-action increment" onClick={this.incrementScore}> + </button>
//       </div>
//     );
//   }
// };



// end of components

// Main Application Component
// ES6 Classes
class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = { players: this.props.initialPlayers , messages: {}};
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
    this.onRemovePlayer = this.onRemovePlayer.bind(this);
  }

  componentDidUpdate(prevProps) {
    //  if (!prevProps || this.props.initialPlayers.length != prevProps.initialPlayers.length) {
    //     this.setState({ players: this.props.initialPlayers });
    //  }

    //  if (!prevProps || this.props.messages !== prevProps.messages) {
    //     this.setState({messages: this.props.messages});
    //     console.log('update messages');
    // }
  }

  onScoreChange(index, delta) {
    this.props.initialPlayers[index].score += delta;
    this.setState(this.state);
    // Update firebase db.
    this.props.database.ref('username/' + this.props.initialPlayers[index].uid).update({'score': this.props.initialPlayers[index].score});
  }

  onPlayerAdd(name) {
    console.log('Player added', name);
    this.props.initialPlayers.push({
      name: name,
      score: 0,
      id: nextID
    });
    this.setState(this.state);  // updating the state
    nextID = nextID + 1;
  }

  onRemovePlayer(index) {
    this.props.initialPlayers.splice(index, 1);
    this.setState(this.state);  // update the state
  }

  render() {
      let leaderIndices = this.getLeaderIndices();
    return (
      <div className="scoreboard">
        <Header title={this.props.title} players={this.props.initialPlayers} database={this.props.database} isHost={this.props.isHost}/>

        <div className="players">
          {this.props.initialPlayers.map(function (player, index) {
            return (
              <Player
                onScoreChange={function (delta) { this.onScoreChange(index, delta) }.bind(this)}
                onRemove={function () { this.onRemovePlayer(index) }.bind(this)}
                name={player.name}
                score={player.score}
                messages={this.props.messages[player.uid]}
                key={player.id}
                isHost={this.props.isHost}
                photoURL={player.photoUrl}
                isLeader={leaderIndices.indexOf(index) > -1} />
            );
          }.bind(this))}
        </div>
        {/* <div hidden={!this.props.isHost}> 
            <AddPlayerForm onAdd={this.onPlayerAdd} />
        </div> */}

      </div>

    );
  }

  getLeaderIndices() {
      let maxScore = 0;
      this.props.initialPlayers.forEach((player) => {
        if (player.score > maxScore) {maxScore = player.score;}
      });
      let indices = [];
      if (maxScore == 0) {return [];}
      this.props.initialPlayers.forEach((player, index)=> {
        if (player.score == maxScore) {
            indices.push(index);
        }  
      });
      return indices;
  }
}

// function Application(props) {
//   return (
//     <div className="scoreboard">
//       <Header title={props.title} />

//       <div className="players">
//         {props.players.map(function (player) {
//           return <Player name={player.name} score={player.score} key={player.id} />
//         })}
//       </div>
//     </div>

//   );
// }

// Application.propTypes = {
//   title: React.PropTypes.string,
//   initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
//     name: React.PropTypes.string.isRequired,
//     score: React.PropTypes.number.isRequired,
//     id: React.PropTypes.number.isRequired
//   })).isRequired  // accepts only an array of objects which hasd the specifc valuies listed in the shape()
// };

// Application.defaultProps = {  // This is the defualt value you can set if there is no specifc title value
//   title: "Scoreboard"
// };

// ReactDOM.render(<Application initialPlayers={PLAYERS} />, document.getElementById('container'));

export default Scoreboard;