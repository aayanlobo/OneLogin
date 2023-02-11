import React, { Suspense } from 'react';
// import Content from "../components/Content";
import styled from 'styled-components';

// import CoverPic from '../components/CoverPic';
// import Navbar from '../components/Navbar';
// import Logo from './../components/Logo';

const CoverPic = React.lazy(() => import('../components/CoverPic'));
const Navbar = React.lazy(() => import('../components/Navbar'));
const Logo = React.lazy(() => import('../components/Logo'));

const Section = styled.section`
  position: relative;
  min-height: 100vh;
overflow: hidden;

`;

const Home = () => {
  return (
    <Section  id="home">
      <Suspense fallback={<></>}>
        <Logo />
        {/* <Content/> */}
        <Navbar />
        <CoverPic />
      </Suspense>
      
    </Section>
  );
};

export default Home;
