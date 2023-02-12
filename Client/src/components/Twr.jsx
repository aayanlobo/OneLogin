import React from 'react';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
const Wrapper=styled.div`
position: relative;
top: 0vh;
left: 28vw;
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

@media (max-width: 64em) {
  position: absolute;
  left: 60vw;
  font-size:40px;
  top: 25vh;
  // margin-left: -40vw;
  object-position: center 20%;
}
@media (max-width: 48em) {
  width:50vw;
  position: absolute;
  font-size: 40px;
  left: 25vw;
  top: 25vh;
  object-position: center 50%;
}
@media (max-width: 35em) {
  width:60vw;
  position: absolute;
  font-size: 30px;
  left: 20vw;
  top: 25vh;
  object-position: center 50%;
}
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