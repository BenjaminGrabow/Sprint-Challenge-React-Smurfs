import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`

background: #c31432;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #240b36, #c31432);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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

a {
    text-decoration: none;
    font-size: 1.5rem;
    color: black;
  }
  `;

const Smurf = props => {
  return (
    <StyledDiv>
      <Link to={`/smurf_${props.name}`}><h3>{props.name}</h3></Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </StyledDiv>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

