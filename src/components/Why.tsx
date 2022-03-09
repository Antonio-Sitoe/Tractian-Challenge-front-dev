import styled from 'styled-components';

const Section = styled.section`
  color: #3b3b3b;
  h2 {
    font-size: 2.25rem;
    text-align: center;
    margin: 2rem 0;
    strong {
      font-weight: bold;
    }
  }

  ul {
    margin: 4rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    position: relative;

    li {
      border: 1px solid #60a5fa;
      padding: 2rem;
      display: grid;
      border-radius: 0.3rem;
      gap: 1rem;
      img {
        max-width: 5rem;
      }
      h3 {
        font-weight: bold;
      }

      p {
        font-size: 0.9rem;
        color: #4f5c6b;
        line-height: 1.5;
      }

      &:hover {
        position: relative;
        box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.6);
        transition: 0.3s;
        top: -1rem;
        cursor: pointer;
      }
    }
  }
  div {
    text-align: center;
    button {
      margin: 0.6rem 0;
      font-size: 1rem;
      border: none;
      font-weight: bold;
      padding: 0.6rem 1.5rem;
      cursor: pointer;
      border-radius: 0.3rem;
      background: #1fbc59;
      color: white;
    }
  }
`;
const Why = () => {
  return (
    <Section className='container'>
      <h2>
        Por que escolher a <strong>Tractian?</strong>
      </h2>
      <ul>
        <li>
          <img src='/icon-maintence-plataform.svg' alt='' />
          <h3>Manutenção Preditiva</h3>
          <p>
            Detecção automática de falhas, saúde do ativo em tempo real,
            confiabilidade e insights automáticos.
          </p>
        </li>
        <li>
          <img src='/icon-maintence-online.svg' alt='' />
          <h3>Manutenção ONline</h3>
          <p>
            Sensor Tractian coleta dados de vibração, temperatura, horímetro e
            consumo de energia em tempo real.
          </p>
        </li>
        <li>
          <img src='/icon-maintence-pump.svg' alt='' />
          <h3>Setup Instantâneo</h3>
          <p>
            Solução Plug & Play, sem necessidade de WiFi industrial, comunicação
            via 3G/4G independente.
          </p>
        </li>
        <li>
          <img src='/icon-maintence-horimeter.svg' alt='' />
          <h3>CMMS Integrado</h3>
          <p>
            Automatize processos, ordens de serviço e tenha total controle sobre
            seus ativos e equipe.
          </p>
        </li>
      </ul>
      <div>
        <button>Fale com um especialista</button>
      </div>
    </Section>
  );
};

export default Why;
