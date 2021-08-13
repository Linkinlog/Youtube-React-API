import './App.css';
import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Videos from './components/Videos/Videos';
import { Alert } from './components/Alert';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
// import { SearchedVid } from './components/Videos/SearchedVid';

class App extends Component {
  state = {
    alert: null,
  }
  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}})
    setTimeout(() => this.setState({alert: null}), 5000)
  }
  
  render(){
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Alert alert={this.state.alert}/>
      <Switch>
        <Videos setAlert={this.setAlert}/>
      </Switch>
    </div>
    </Router>
  );
}}

export default App;
