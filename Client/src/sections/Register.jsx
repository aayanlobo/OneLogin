import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import img1 from "../assets/Images/img1.png";
import img3 from "../assets/Images/img3.gif";
import img2 from "../assets/Images/hi.gif";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

// const Left = styled.div`
//   width: 50%;
//   font-size: ${(props) => props.theme.fontlg};
//   font-weight: 300;
//   position: relative;
//   z-index: 5;
//   margin-top: 20%;

//   @media (max-width: 64em) {
//     width: 80%;

//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%) !important;
//     margin: 0 auto;

//     padding: 2rem;
//     font-weight: 600;

//     backdrop-filter: blur(2px);
//     background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
//     border-radius: 20px;
//   }
//   @media (max-width: 48em) {
//     font-size: ${(props) => props.theme.fontmd};
//   }
//   @media (max-width: 30em) {
//     font-size: ${(props) => props.theme.fontsm};
//     padding: 2rem;
//     width: 70%;
//   }
// `;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
    margin-top: -12%;
    z-index: 2;
  }

  .small-img-1 {
    width: 35%;
    position: absolute;
    right: 95%;
    bottom: 20%;
    left: -30%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 95%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      top: 2%;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 70%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const Content=styled.div`

.h1{
  font-size: 10px;
}

display: flex;
flex-direction: column;
alignItems: left;
justifyContent: center;


position: relative;
top: 36vh;
right: -160%;


`;

const Btn = styled.button`
width: 15vw;
height: 8vh;
margin-top: 2rem;

background-image: linear-gradient(to right, #1F1C2C 0%, #928DAB  51%, #1F1C2C  100%);


text-align: center;
text-transform: uppercase;
transition: 0.5s;
background-size: 200% auto;
color: white;            
box-shadow: 0 0 20px #eee;
border-radius: 10px;
display: block;

font-size: 20px;
font-family: "Sirin Stencil";
&:hover{

  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
  font-size: 22px;
  transition: font-size 0.3s;
}
`;
const Register= () => {
  return (
  
  
    <Section id="fixed-target" className="Register">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Register here
      </Title>

      


      <Right>

    
        <Content >      
          <a href=''><Btn>Login</Btn></a>
          <a href='https://sign-up-theta.vercel.app/'><Btn>Sign up</Btn></a>
        </Content>
                      
    
      
        <img width="400" height="600" src={img1} alt="About Us" />
        <img
          width="400"
          height="600"
          className="small-img-1"
          src={img2}
          alt="About Us"
          data-scroll
          data-scroll-speed="3"
        />
        <img
          width="400"
          height="600"
          className="small-img-2"
          src={img3}
          alt="About Us"
          data-scroll
          data-scroll-speed="-2"
        />
        
         
      </Right>
    </Section>

    
    
    
  );
};

export default Register;
