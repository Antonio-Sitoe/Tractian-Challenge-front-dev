import React from 'react';
import styled from 'styled-components';

const Section = styled.main`
  margin: 3rem auto;
  h2 {
    text-align: center;
    &:after {
      content: '';
      width: 12rem;
      height: 4px;
      display: block;
      background: #4c6cc8;
      margin: 2rem auto;
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
    }
  }
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
    li {
      color: #252525;
      text-align: center;
      h1 {
        font-weight: bold;
        font-size: 3rem;
      }
    }
  }
`;

const Machines = () => {
  return (
    <Section className='container'>
      <h2>Suas máquinas mais seguras.</h2>
      <ul>
        <li>
          <h1>90%</h1>
          <p>DE ASSERTIVIDADE DOS INSIGHTS GERADOS PELA PLATAFORMA</p>
        </li>
        <li>
          <h1>45%</h1>
          <p>AUMENTO DE CONFIABILIDADE DAS MÁQUINAS COM SISTEMA TRACTIAN.</p>
        </li>
        <li>
          <h1>30%</h1>
          <p>REDUÇÃO DAS OCORRÊNCIAS DE ÚLTIMA HORA NA MANUTENÇÃO.</p>
        </li>
      </ul>
    </Section>
  );
};

export default Machines;
