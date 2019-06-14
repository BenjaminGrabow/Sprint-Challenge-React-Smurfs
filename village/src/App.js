import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import LoginPage from './components/LoginPage/LoginPage';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
text-align: center;
height: 220vh;

nav {
  display: flex;
  justify-content: space-around;

  a {
    text-decoration: none;
    font-size: 2rem;
    background-color: black;
    color: white;
  }
}

.off {
  display: none;
}

.on {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
}

input {
border-radius: 2rem;
font-size: 1.5rem;
margin: 0 1rem;
}

button {
background-color: red;
border-radius: 50%;
width: 30%;
height: 5rem;
box-shadow: 1rem .5rem .5rem black;
}

`;


const smurfAPI = 'http://localhost:3333/smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: '',
      id: '',
      form: 'off',
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

  update = (id) => {
    this.setState({
      form: 'on',
      id: id,
    })
  };

  updateSmurf = (event) => {
    event.preventDefault();
    
    const id = this.state.id;

    const updatedSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    };

    axios.put(`${smurfAPI}/${id}`, updatedSmurf).then(res => this.setState({
      smurfs: res.data,
      form: 'off',
      id: '',
      name: '',
      age: '',
      height: ''
    }))
  };
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <StyledDiv>
        <nav>
        <NavLink exact to="/smurfs" >Smurfs</NavLink>
        <NavLink to="/smurf_form" >Smurf Form</NavLink>
        </nav>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/smurfs" render={() => <Smurfs smurfs={this.state.smurfs} deleter={this.deleteSmurf} updater={this.update} />} />
        <Route path="/smurf_form" render={() => <SmurfForm addNewSmurf={this.addSmurf} />} />
        {this.state.smurfs.map(smurf => <Route path={`/smurf_${smurf.name}`} 
        render={() => <Smurf name={smurf.name} height={smurf.height} age={smurf.age} /> }
        />)}
        <form className={this.state.form === 'off' ? "off" : "on"}>
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
          <button type="submit" onClick={event => this.updateSmurf(event)}>Update</button>
        </form>
      </StyledDiv>
    );
  }
}

export default App;
