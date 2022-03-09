import styled from 'styled-components';

const Section = styled.section`
  max-width: 1090px;
  margin: 6rem auto;
  padding: 0.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  div.first {
    background: #1c1c1c;

    div {
      background: transparent;

      button {
        color: #252525;
        background: #5bff00;
      }
    }
  }

  div {
    border-radius: 0.3rem;
    padding: 1rem;
    color: whitesmoke;
    background: #081e3d;

    display: grid;

    h2 {
      font-size: 1.8rem;
      line-height: 1.2;
      font-weight: 600;

      span {
        display: block;
      }
    }

    img.max {
      max-width: 22rem;
    }

    img {
      margin: 1rem 0;
    }

    p {
      margin: 1rem 0;
      line-height: 1.5;
      text-align: center;
    }

    div {
      button {
        color: white;
        padding: 0.6rem;
        width: 100%;
        cursor: pointer;
        background: #224eb8;
        max-width: 12rem;
        margin: 0 auto;
        border: none;
        border-radius: 0.3rem;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Services = () => {
  return (
    <Section>
      <div className='first'>
        <h2>
          Software de Manutenção <span>TracOS™</span>
        </h2>
        <img src='/green-line.png' alt='' className='max' />
        <img src='/cmms-presentation.png' alt='' />
        <p>
          O CMMS revolucionário para planejar, acompanhar métricas e conectar-se
          com sua equipe.
        </p>
        <div>
          <button>Ver mais</button>
        </div>
      </div>
      <div className='second'>
        <h2>
          Monitoramento Online <span>Smart Trac</span>
        </h2>
        <img src='/blue-line.png' alt='' className='max' />
        <img src='/sensor-plataforma-celular-tablet.png' alt='' />
        <p>
          O sistema preditivo mais completo do mercado. Monitore vibração,
          temperatura e horímetro dos seus ativos.
        </p>
        <div>
          <button>Ver mais</button>
        </div>
      </div>
    </Section>
  );
};

export default Services;
