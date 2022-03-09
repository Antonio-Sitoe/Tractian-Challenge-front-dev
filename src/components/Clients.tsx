import { Splide, SplideSlide } from '@splidejs/react-splide';
import React from 'react';
import styled from 'styled-components';
import { Button } from '../GlobalStyle';

export const Svg = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='55'
    height='55'
    fill='none'
    viewBox='0 0 48 48'
    className='text-blue-600 mb-2'
  >
    <path fill='#fff' fillOpacity='0.01' d='M0 0H48V48H0z'></path>
    <path
      fill='#1E40AF'
      fillRule='evenodd'
      d='M18.853 9.116c-7.53 4.836-11.714 10.465-12.55 16.887C5 36 13.94 40.893 18.47 36.497 23 32.1 20.285 26.52 17.005 24.994c-3.28-1.525-5.286-.994-4.936-3.032.35-2.039 5.016-7.69 9.116-10.323a.749.749 0 00.114-1.02L20.285 9.3c-.44-.572-.862-.55-1.432-.185zM38.679 9.116c-7.53 4.836-11.714 10.465-12.55 16.887-1.303 9.997 7.637 14.89 12.167 10.494 4.53-4.397 1.815-9.977-1.466-11.503-3.28-1.525-5.286-.994-4.936-3.032.35-2.039 5.017-7.69 9.117-10.323a.749.749 0 00.113-1.02L40.11 9.3c-.44-.572-.862-.55-1.431-.185z'
      clipRule='evenodd'
    ></path>
  </svg>
);

const Section = styled.main`
  margin: 3rem auto;

  background-image: linear-gradient(
    to right bottom,
    #1d4dd3,
    #1c49c2,
    #1c44b1,
    #1d40a0,
    #1e3b8f
  );
  div.container {
    padding: 4rem 0;
    color: white;
    h2 {
      text-align: center;
      color: white;
    }
    main {
      display: grid;
      grid-template-columns: 30rem 1fr;
      gap: 1rem;
      align-items: center;

      div.content {
        padding: 3rem;

        img {
          max-width: 13rem;
          margin: 2rem 0;
        }
        p {
          margin: 1rem 0;
          font-size: 1.3rem;
        }

        button {
          font-weight: normal;
        }
      }
        div.sliders {
        display:flex ;
        overflow:hidden ;
       padding: 4rem 1rem;

  }

      @media (max-width:1000px){
         grid-template-columns: 1fr;
         div.sliders {
           order:1 ;
         }
            div.content {
              order:2 ;
            }
      }
    }
  }

`;

const Slide = styled.div`
  position: absolute;
  bottom: -3rem;
  display:flex ;z-index: 10;

   border-radius: .3rem;
  button {
    background:#22d3ee ;
    width:30px ;
    height:30px ;
    border:none ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    cursor: pointer;
    font-size:1rem ;

    &:hover {
      background:#1bc0da ;
    }

  }
`;

const Testemunial = styled.div`
  width: 100%;
  padding: 1rem;
  color: #252525;
  border-radius: 0 0 0.3rem 0.3rem ;
  background-color: white;
  border-top:4px solid #67e8f9 ;

  img {
    margin: 1rem 0;
    width: 4rem;
  }

  div {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    img {
      width: 4rem;
    }
    div {
      h5 {
        font-weight: 500;
        font-size: 0.8rem;
      }
      p {
        font-size: 0.8rem;
      }

      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }
  }
`;
const Clients = () => {
  return (
    <Section>
      <div className='container'>
        <h2>O que os nossos clientes dizem:</h2>
        <main>
          <div className='content'>
            <img src='/capterra-badge.png' alt='' />
            <p>
              Nomeada solução favorita de CMMS e OEE no ranking da Capterra 2021
            </p>
            <Button>Agendar Demo</Button>
          </div>
          <div className='sliders'>
            <Splide
              options={{
                type: 'slide',
                perPage: 3,
                width: 800,
                pagination: false,
                gap: '1rem',
              }}
              renderControls={() => (
                <Slide className='splide__arrows'>
                  <button className='splide__arrow--prev'>
                    {"<"}
                  </button>
                  <button className='splide__arrow--next'>
                    {">"}
                  </button>
                </Slide>
              )}
            >
              <SplideSlide>
                <Testemunial>
                  <Svg />
                  <p>
                    O dispositivo traz mais confiabilidade ao processo, agilizando
                    a análise de informações e evitando paradas na produção, o que
                    impacta positivamente a produtividade.
                  </p>
                  <img src='/stars.svg' alt='' />
                  <div>
                    <img src='/eduarda.png' alt='' />
                    <div>
                      <h5>Eduarda Buaiz</h5>
                      <p>Diretora Geral - Indústria Alimentícia</p>
                    </div>
                  </div>
                </Testemunial>
              </SplideSlide>
              <SplideSlide>
                <Testemunial>
                  <Svg />
                  <p>
                    O dispositivo traz mais confiabilidade ao processo, agilizando
                    a análise de informações e evitando paradas na produção, o que
                    impacta positivamente a produtividade.
                  </p>
                  <img src='/stars.svg' alt='' />
                  <div>
                    <img src='/eduarda.png' alt='' />
                    <div>
                      <h5>Eduarda Buaiz</h5>
                      <p>Diretora Geral - Indústria Alimentícia</p>
                    </div>
                  </div>
                </Testemunial>
              </SplideSlide>
              <SplideSlide>
                <Testemunial>
                  <Svg />
                  <p>
                    O dispositivo traz mais confiabilidade ao processo, agilizando
                    a análise de informações e evitando paradas na produção, o que
                    impacta positivamente a produtividade.
                  </p>
                  <img src='/stars.svg' alt='' />
                  <div>
                    <img src='/eduarda.png' alt='' />
                    <div>
                      <h5>Eduarda Buaiz</h5>
                      <p>Diretora Geral - Indústria Alimentícia</p>
                    </div>
                  </div>
                </Testemunial>
              </SplideSlide>
              <SplideSlide>
                <Testemunial>
                  <Svg />
                  <p>
                    O dispositivo traz mais confiabilidade ao processo, agilizando
                    a análise de informações e evitando paradas na produção, o que
                    impacta positivamente a produtividade.
                  </p>
                  <img src='/stars.svg' alt='' />
                  <div>
                    <img src='/eduarda.png' alt='' />
                    <div>
                      <h5>Eduarda Buaiz</h5>
                      <p>Diretora Geral - Indústria Alimentícia</p>
                    </div>
                  </div>
                </Testemunial>
              </SplideSlide>
              <SplideSlide>
                <Testemunial>
                  <Svg />
                  <p>
                    O dispositivo traz mais confiabilidade ao processo, agilizando
                    a análise de informações e evitando paradas na produção, o que
                    impacta positivamente a produtividade.
                  </p>
                  <img src='/stars.svg' alt='' />
                  <div>
                    <img src='/eduarda.png' alt='' />
                    <div>
                      <h5>Eduarda Buaiz</h5>
                      <p>Diretora Geral - Indústria Alimentícia</p>
                    </div>
                  </div>
                </Testemunial>
              </SplideSlide>
              <SplideSlide>
                <Testemunial>
                  <Svg />
                  <p>
                    O dispositivo traz mais confiabilidade ao processo, agilizando
                    a análise de informações e evitando paradas na produção, o que
                    impacta positivamente a produtividade.
                  </p>
                  <img src='/stars.svg' alt='' />
                  <div>
                    <img src='/eduarda.png' alt='' />
                    <div>
                      <h5>Eduarda Buaiz</h5>
                      <p>Diretora Geral - Indústria Alimentícia</p>
                    </div>
                  </div>
                </Testemunial>
              </SplideSlide>
              <SplideSlide>
                <Testemunial>
                  <Svg />
                  <p>
                    O dispositivo traz mais confiabilidade ao processo, agilizando
                    a análise de informações e evitando paradas na produção, o que
                    impacta positivamente a produtividade.
                  </p>
                  <img src='/stars.svg' alt='' />
                  <div>
                    <img src='/eduarda.png' alt='' />
                    <div>
                      <h5>Eduarda Buaiz</h5>
                      <p>Diretora Geral - Indústria Alimentícia</p>
                    </div>
                  </div>
                </Testemunial>
              </SplideSlide>
            </Splide>
          </div>
        </main>
      </div>
    </Section>
  );
};

export default Clients;
