import React from 'react';
import styled from 'styled-components';
import { Button } from '../GlobalStyle';

const Section = styled.section`
  max-width: 1090px;
  margin: 6rem auto;
  padding: 0.6rem;
  display: grid;
  align-items: start;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const List = styled.div`
  h4 {
    text-transform: uppercase;
    font-weight: 600;
    color: #2563eb;
  }

  h2 {
    margin: 2rem 0;
    font-size: 2.25rem;
    line-height: 1.3;
    span {
      display: block;
      font-weight: 600;
    }
  }

  ul {
    display: grid;
    gap: 2rem;

    li {
      cursor: pointer;
      color: #b9b6bb;
      font-size: 1.25rem;
      span {
        color: #2563eb;

        margin-right: 2rem;
      }
    }
  }
  button {
    margin-top: 3rem;
  }
`;
const Content = styled.div`
  img {
    max-width: 25rem;
    margin: auto;
  }
`;
const contens = [
  {
    src: '/cole-o-sensor.png',
    title: 'Tecnologia IoT avançada para conectar seus ativos',
    content:
      'Nossos sensores enviam dados do seu equipamento através de rede 3g/4g. Basta fixar o sensor no local a ser monitorado e pronto: acompanhe em tempo real a condição da sua máquina.',
  },
  {
    src: '/features-header.png',
    title: 'Plataforma que trabalha por você',
    content:
      'Insights automáticos, detecção de folgas mecânica, desalinhamento, desacoplamento e modelos de IA exclusivos da Tractian para cada tipo de máquina.',
  },
  {
    src: '/automacoes-e-metricas.png',
    title: 'O Software de manutenção dos seus sonhos',
    content:
      'Use procedimentos online para organizar checklists e inspeções. Centralize a rotina do seu time e potencialize as atividades de cada colaborador através das automações e métricas.',
  },
];

function Produts() {
  const [state, setState] = React.useState(0);
  function handle(target: HTMLLIElement, element: number) {
    setState(element);
    target.style.color = '#252525';
  }
  return (
    <Section>
      <List>
        <h4>MANUTENÇÃO PREDITIVA DESCOMPLICADA</h4>

        <h2>
          Mantenha a sua equipe e seus ativos com o
          <span>melhor desempenho</span>
        </h2>
        <ul>
          <li onClick={({ target }: any) => handle(target, 0)}>
            <span>01</span>Sensor Plug & Play
          </li>
          <li onClick={() => setState(1)}>
            <span>02</span>Monitoramento Online
          </li>
          <li onClick={() => setState(2)}>
            <span>03</span>Gestão de Ativos
          </li>
        </ul>
        <Button>Agende uma demonstração</Button>
      </List>
      <Content>
        <img src={contens[state].src} alt='' />
        <h1>{contens[state].title}</h1>
        <p>{contens[state].content}</p>
      </Content>
    </Section>
  );
}

export default Produts;
