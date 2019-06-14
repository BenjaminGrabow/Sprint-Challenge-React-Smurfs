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
      name: '',
      age: '',
      height: '',
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
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
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
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Update</button>
        </form>
      
      </div>
    );
  }
}

export default App;
