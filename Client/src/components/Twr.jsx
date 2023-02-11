import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
const Wrapper=styled.div`
position: relative;
top: 0vh;
left: 26vw;
width: 40vw;
height: 50vh;
font-family: "Sirin Stencil";
font-weight:800;
font-size:50px;
text-align: center;
display:block;
// background: green;
justify-content:center;
align-items:center;

z-index: 100;
`;

function Type() {
    return (
      <Wrapper>
        <Typewriter
    
         onInit={(typewriter)=> {
    
         typewriter
          
         .typeString("Welcomes You")
           
         .pauseFor(3000)
         .deleteAll()
         .typeString("The Most Intuitive and Secure Graphical Authentication System")
         .start();

         }}
         />
      </Wrapper>
    );
  }
    
  export default Type;