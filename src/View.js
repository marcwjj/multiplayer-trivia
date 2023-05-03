import { Component } from 'react';
import './View.css';
import Button from '@material-ui/core/Button';
import firebase from "firebase/app";
import "firebase/database";
import Scoreboard from './Scoreboard.js';
import { Paper } from '@material-ui/core';

export let NUM_MESSAGES_HISTORY = 10;

class View extends Component {   
    constructor(props) {
        super(props);
        this.database = firebase.database();
        this.state = {prevMessages : [], users: {}, players: [], message : '', playerMessages: {}, database: this.database};
        this.sendMessage = this.sendMessage.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
      }

    render() {
        return (
              <div className="View">
                <Paper className="messaging-paper" elevation={3}>
                <div className="Messaging">
                  <div className="first-row">
                    <Button variant="outlined" color="secondary" onClick={()=>this.quickAnswer("A")}> 
                    A
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={()=>this.quickAnswer("B")}> 
                    B
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={()=>this.quickAnswer("C")}> 
                    C
                    </Button>
                  </div>
                  <div className="second-row">

                    <Button variant="outlined" color="secondary" onClick={()=>this.quickAnswer("D")}> 
                    D
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={()=>this.quickAnswer("E")}> 
                    E
                    </Button>
                  </div>
                  <div className="custom-text-form">
                  <form onSubmit={this.sendMessage}>
                    <input placeholder="Type your answer" type="text" value={this.state.message} onChange={this.onMessageChange} />
                    <Button type="submit" variant="contained" color="primary" >
                      Enter
                    </Button>
                  </form>
                </div>
                </div>
                </Paper>
                <div className="History">
                  <Scoreboard initialPlayers={this.state.players} messages={this.state.playerMessages} database={this.state.database} isHost={this.props.isHost}/>
                    <div hidden={!this.props.isHost}>
                    <Button variant="contained" color="secondary"  onClick={()=>this.removeAllUsers()}>
                      Remove all users (refresh page after)
                    </Button>
                    </div>
                </div>
              </div>

        );
      }
    
    componentDidUpdate(prevProps) {
      if (!prevProps || this.props.user.uid != prevProps.user.uid) {
        console.log('props.user update');
        this.updateUserName();
        this.deleteOldMessages();
        this.setupPlayerListeners();
      }
    }

    updateUserName() {
      this.database.ref('username/' + this.props.user.uid).update({'username': this.props.user.displayName, 'photoUrl': this.props.user.photoURL });
    }

    removeAllUsers() {
      let usernameRef = this.database.ref('username');
      usernameRef.on('child_added', (snapshot) => {
        snapshot.ref.remove();
      });
    }

    // Remove posts that's older than 2 hours.
    deleteOldMessages() {
      let retrieveMessagesRef = this.database.ref('users/'+this.props.user.uid);
      let oldestKey = "";
      let now = Date.now();
      let cutoff = now - 2*60*60*1000;
      retrieveMessagesRef.orderByChild('timestamp').endAt(cutoff).limitToLast(1).on("child_added", (snapshot) => {
        snapshot.ref.remove();
      })
    }

    quickAnswer(text) {
      this.state.message = text;
      this.sendMessage();
    }

    sendMessage(e) {
      if (e) {
        e.preventDefault();
      }
      // this.deleteOldMessages();
      if (!this.state.message) {return;}
      const message = this.state.message;
      this.setState({ message: '' });
        let postMessagesRef = this.database.ref('users/'+this.props.user.uid);
       let newMessage = postMessagesRef.push();
       newMessage.set({message, timestamp: Date.now()});
    }

    setupPlayerListeners() {
      let usernameRef = this.database.ref('username');
      usernameRef.on('child_added', (snapshot) => {
        this.state.users[snapshot.key] = {username: snapshot.val().username, score: snapshot.val().score || 0, photoUrl: snapshot.val().photoUrl};
        const sortedUsers = Object.keys(this.state.users).sort().map((key, i) => {
            return {name:this.state.users[key].username, id: i, score: this.state.users[key].score, uid: key,
              photoUrl: this.state.users[key].photoUrl};
          });
        this.setState({players: sortedUsers});
        //console.log(sortedUsers);
        this.setupChatHistoryListeners(sortedUsers);
      });
      usernameRef.on('child_changed', (snapshot) => {
        this.state.users[snapshot.key] = {username: snapshot.val().username, score: snapshot.val().score || 0, photoUrl: snapshot.val().photoUrl};
        const sortedUsers = Object.keys(this.state.users).sort().map((key, i) => {
            return {name:this.state.users[key].username, id: i, score: this.state.users[key].score, uid: key,
              photoUrl: this.state.users[key].photoUrl};
          });
        this.setState({players: sortedUsers});
        // console.log(sortedUsers);
        // this.setupChatHistoryListeners(sortedUsers);
      })
    }

    setupChatHistoryListeners(sortedUsers) {
      for (let player of sortedUsers) {
        // console.log(player);
        let retrieveMessagesRef = this.database.ref('users/'+player.uid);
        retrieveMessagesRef.orderByChild('timestamp').limitToLast(3).on("child_added", (snapshot) => {
          console.log(snapshot.val().message);
          let history = this.state.playerMessages[player.uid];
          if (!history) {
            history = this.state.playerMessages[player.uid] = {};
          }
          if (!history.lastTimestamp || history.lastTimestamp !== snapshot.val().timestamp) {
            history.lastTimestamp = snapshot.val().timestamp;
            if (!history.messages) {
              history.messages = [];
            }
            history.messages.unshift(snapshot.val().message);
            if (history.messages.length > 3) {history.messages.pop();}
            // console.log(this.state.playerMessages);
            this.setState({playerMessages: this.state.playerMessages});
          }
          
        })
      }
    }
  
    onMessageChange(e) {
      this.setState({ message: e.target.value });      
    }
}

export default View;