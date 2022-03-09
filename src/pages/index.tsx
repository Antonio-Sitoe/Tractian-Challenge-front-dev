import React from 'react';
import styled from 'styled-components';
import Contact from '../components/Contact';
import ServicesP from '../components/ServicesP';
import Intro from '../components/Intro';
import BlogAndHire from '../components/BlogAndHire';
import Machines from '../components/Machines';
import Why from '../components/Why';
import Produts from '../components/Produts';
import Clients from '../components/Clients';
import Functiona from '../components/Funciona';

const HomeStyle = styled.main``;

function Home() {
  return (
    <HomeStyle>
      <Intro />
      <Produts />
      <ServicesP />
      <Why />
      <Functiona />
      <Machines />
      <Clients />
      <BlogAndHire />
      <Contact />
    </HomeStyle>
  );
}

export default Home;
