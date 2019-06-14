import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { NavLink, Route } from 'react-router-dom';

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

  deleteSmurf = (id) => {
    axios.delete(`${smurfAPI}/${id}`).then(res => this.setState({
      smurfs: res.data
    }))
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        <NavLink to="/" >Smurfs</NavLink>
        <NavLink to="/smurf_form" >Smurf Form</NavLink>
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} deleter={this.deleteSmurf} />} />
        <Route path="/smurf_form" render={() => <SmurfForm addNewSmurf={this.addSmurf} />} />
      </div>
    );
  }
}

export default App;
