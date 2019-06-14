import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
width: 50%;
margin: 2rem auto;
background-color: black;
border-radius: 50%;
color: white;
justify-content: center;
align-items: center;
height: 25rem;
background: #c31432;
background: -webkit-linear-gradient(to right,#240b36,#c31432);
background: linear-gradient(to right,#240b36,#c31432);
box-shadow: 1rem .5rem .5rem black;

input {
    border-radius: 3rem; 
    margin-top: .5rem;
    box-shadow: 1rem .5rem .5rem black;
    font-size: 1.5rem; 
}

.unactive {
        display: none;
}

.active {
        display: flex;
}

button {
  margin-top: 2rem;
background-color: red;
border-radius: 50%;
width: 15%;
height: 5rem;
box-shadow: 1rem .5rem .5rem black;
}

a {
        text-decoration: none;
        color: white;
        font-size: 1.5rem;
}
`;

class LoginPage extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        password: '',
                        username: '',
                }
        }

        changePassword = (event) => {
                this.setState({ password: event.target.value })

        }

        changeUsername = (event) => {
                this.setState({ username: event.target.value })
        }

        render() {
                return (
                        <StyledDiv>
                                <h1>Login Here</h1>
                                <p>Username</p>
                                <input onChange={this.changeUsername} type="text" name="" placeholder="Enter Username" />
                                <p>Password</p>
                                <input onChange={this.changePassword} type="password" name="" placeholder="Enter Password" />
                                <button className={
                                        this.state.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
                                                && this.state.username.length > 5
                                                ? "active" : 'unactive'}>
                                        <Link to="/smurfs">Login</Link>
                                </button>
                        </StyledDiv>
                );
        }
}

export default LoginPage;