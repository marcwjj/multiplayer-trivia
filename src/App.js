import logo from './logo.svg';
import './App.css';
import firebase from "firebase/app";
import "firebase/auth";
import Button from '@material-ui/core/Button';

function App() {
  console.log(firebase);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Button variant="contained" color="primary" onClick={()=>{console.log('foo');}}> 
          Sign in to Google 
        </Button>
    </div>
  );
}

export default App;
