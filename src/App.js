import logo from './logo.svg';
import './App.css';
import View from './View.js';
import firebase from "firebase/app";
import "firebase/auth";
import Button from '@material-ui/core/Button';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('foo');
              // Your web app's Firebase configuration
              var firebaseConfig = {
                apiKey: "AIzaSyB4X2zC7tYE6T5e0rIBlZ8RzbNhnAQ58Ws",
                authDomain: "multiplayer-trivia-68951.firebaseapp.com",
                projectId: "multiplayer-trivia-68951",
                storageBucket: "multiplayer-trivia-68951.appspot.com",
                messagingSenderId: "1016103210575",
                appId: "1:1016103210575:web:c997edfe327ca68893e43a",
                measurementId: "G-7JBQP4CF0Y"
              };
              if (!firebase.apps.length){
              // Initialize Firebase
              firebase.initializeApp(firebaseConfig);
              }
              
      
      
    this.state = {signed : false, user: {}, isHost: false};
    this.authProvider = new firebase.auth.GoogleAuthProvider();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> ML Insights Trivia </h1>
          <img src={this.state.user.photoURL} className="Google-photo" hidden={!this.state.signed}></img>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div hidden={!this.state.signed}>
          <View hidden={!this.state.signed} user={this.state.user} isHost={this.state.isHost}></View>
        </div>
        <div className="Sign-in-button-div">
          <Button variant="contained" color="primary" disabled={this.state.signed} onClick={()=>this.signIn()}> 
            Sign in to Google 
          </Button>
        </div>
      </div>
    );
  }

  signIn() {
    firebase.auth()
      .signInWithPopup(this.authProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        this.setState({signed:true, user: result.user, isHost: result.user.uid == "93ev6xk0QzPQJG7daXFOD7YlzZi1" || 
        result.user.uid == "CSGH2cs8wWY0dfIzO961RziMdgM2"});
        console.log(user.displayName);
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }
}

export default App;
