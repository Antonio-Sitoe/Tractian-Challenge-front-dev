import React from 'react';
import styled from 'styled-components';

const Style = styled.main`
  padding-top: 6rem;
  margin-bottom: 2rem;

  section {
    background-image: linear-gradient(
      to left bottom,
      #224eb8,
      #214ebb,
      #214dbe,
      #204dc0,
      #204cc3
    );
    position: relative;
    img.ondas {
      bottom: 0;
      position: absolute;
    }
  }
`;
const BackgroundImage = styled.div`
  background-position: center;
  background-size: cover;
  height: 600px;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  color: white;
  div {
    max-width: 800px;
    border-radius: 0.3rem;
    padding: 2rem;
    margin: 1rem;

    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      line-height: 1.2;
      font-weight: 600;
    }

    p {
      line-height: 1.5;
      margin: 1rem 0;
      a {
        color: white;
        font-weight: bold;
        text-decoration: none;
      }
    }
    button {
      border: none;
      padding: 0.6rem 3rem;
      background: #22c55e;
      color: white;
      border-radius: 0.3rem;
    }
    @media (max-width: 400px) {
      padding: 1rem;
      h2 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    img {
      display: none;
    }
  }
`;
const Intro = () => {
  return (
    <Style>
      <section>
        <BackgroundImage className='container'>
          <div>
            <h2>Monitoramento Online e Gestão de Ativos em um só lugar</h2>
            <p>
              Evite falhas nas suas máquinas e torne o tempo de inatividade uma
              coisa do passado com sistema preditivo da TRACTIAN.
            </p>
            <button>Demostracao</button>
            <p>
              Já é cliente? <a href=''>Acesse aqui.</a>
            </p>
          </div>
          <div>
            <img src='/bg.png' alt='' />
          </div>
        </BackgroundImage>
        <img src='/ondas.svg' className='ondas' alt='' />
      </section>
    </Style>
  );
};

export default Intro;
