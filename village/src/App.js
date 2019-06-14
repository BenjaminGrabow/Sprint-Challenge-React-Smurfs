import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

const smurfAPI = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  fetchSmurfs = () => {
    axios.get(smurfAPI)
    .then(res => this.setState({smurfs: res.data}))
  };

  componentDidMount = () => {
    this.fetchSmurfs();
  };

  addSmurf = (newSmurf) => {
    this.setState({
      smurfs: newSmurf
    })
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <SmurfForm addNewSmurf={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
