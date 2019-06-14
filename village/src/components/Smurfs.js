import React, { Component } from 'react';
import Smurf from './Smurf';
import styled from 'styled-components';

const StyledContainer = styled.div`
background: #c31432;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
display: flex;
color: white;
width: 50%;
margin: 1rem auto;
justify-content: space-around;
border-radius: 3rem;
align-items: center;
box-shadow: 1rem .5rem .5rem black;
transition: all 2s ease-in;

&:hover{
        transform: rotate(20deg);
}

button {
background-color: red;
border-radius: 50%;
width: 15%;
height: 5rem;
box-shadow: 1rem .5rem .5rem black;
}
`;

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <StyledContainer>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <button onClick={() => this.props.deleter(smurf.id)}>
                  Delete
                  </button>
                <button onClick={() => this.props.updater(smurf.id)}>
                  Update
                  </button>
              </StyledContainer>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: [],
};

export default Smurfs;
