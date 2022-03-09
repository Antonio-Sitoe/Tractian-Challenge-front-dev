import React from 'react';
import styled from 'styled-components';

const Section = styled.main`
  margin: 6rem auto;
  text-align: center;
  width: 100%;
  padding: 2rem 0;

  .butttons {
    margin: 2rem auto;
    display: flex;
    align-items: center;
    margin: 1rem;
    border: 1px solid #252525;

    border-radius: 0.4rem;
    button {
      padding: 0.6rem;
      cursor: pointer;
      border: none;
      background: none;
      display: block;
      width: 100%;
      font-size: 1.1rem;
      font-weight: 500;
    }
    button.blue {
      background-image: linear-gradient(
        to right bottom,
        #1f3c8f,
        #2143a0,
        #224bb1,
        #2352c3,
        #235ad5
      );
      color: white;
    }
    button.dark {
      background: #1c1c1c;
      color: white;
    }
  @media (max-width:800px){
    button {
    font-size:.8rem ;

    }
  }

  }
  div.content.dark {
    background: #1c1c1c;
    .div {
      ul {
        li {
          &:hover {
            background: #333333 !important;
          }
        }
      }
    }
  }
  div.content.blue {
    background-image: linear-gradient(
      to right bottom,
      #1f3c8f,
      #2143a0,
      #224bb1,
      #2352c3,
      #235ad5
    );
    .div {
      ul {
        li {
          &:hover {
            background: #3656a9;
          }
        }
      }
    }
  }

  div.content {
    padding: 3rem 0;
    background-image: linear-gradient(
      to right bottom,
      #1f3c8f,
      #2143a0,
      #224bb1,
      #2352c3,
      #235ad5
    );
    .div {
      color: white;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      text-align: left;

      ul {
        display: grid;
        gap: 1rem;
        li {
          cursor: pointer;
          border-radius: 0.3rem;
          padding: 1rem;

          h3 {
            display: flex;
            align-items: center;
            font-weight: 500;

            span {
              margin-right: 1rem;
              color: #252525;
              background: whitesmoke;
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          p {
            margin-left: 3.4rem;
          }

          &:hover {
            background: #3656a9;
          }
        }
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          max-width: 33rem;
        }
      }

      @media (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }
  }

`;
interface Content {
  first: List;
  second: List;
}
interface Objects {
  title: string;
  p: string;
  src: string;
}
type List = Array<Objects>;
const Contents: Content = {
  first: [
    {
      title: 'Nós enviamos os sensores',
      p: 'Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e nem falar com a TI.',
      src: '/1.png',
    },
    {
      title: 'Cole em suas máquinas',
      p: 'Nosso sensor é colado na máquina como um bandaid. Ele é responsável por transmitir os dados de vibração e temperatura do equipamento para a plataforma.',
      src: '/2.png',
    },
    {
      title: 'Receba Insights valiosos',
      p: 'Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e nem falar com a TI.',
      src: '/3.png',
    },
  ],
  second: [
    {
      title: 'Nos envie sua lista Ativos, Locais e Usuários',
      p: 'Fazemos a entrega pelos Correios para o Brasil todo. Você recebe o sensor na sua empresa. Não necessita passar pelo Wi-Fi industrial e nem falar com a TI.',
      src: '/4.png',
    },
    {
      title: 'Automatize seus Planos e Ordens de Serviço',
      p: 'Use procedimentos online para organizar checklists e inspeções. Sequenciar e planejar Ordens de Serviço preventivamente nunca foi tão fácil',
      src: '/5.png',
    },
    {
      title: 'Substitua o Excel por completo',
      p: 'A plataforma vai abrir as Ordens de serviços e distribui-las conforme as automações configuradas, permitindo que toda a equipe de manutenção se preocupe apenas em executar suas atividades de rotina.',
      src: '/6.png',
    },
  ],
};
const Functiona = () => {
  const [show, setShow] = React.useState<List>(Contents.first);
  const [src, setSrc] = React.useState(show[0].src);
  const [color, setColor] = React.useState('blue');
  const firstbtn = React.useRef<HTMLButtonElement | null>(null)

  React.useEffect(() => {
    setSrc(show[0].src);
    firstbtn.current?.classList.add(color);
  }, [show,color]);

  return (
    <Section>
      <div>
        <h2>Como funciona ?</h2>
        <p>Combine monitoramento e gestão, escolha</p>

        <div className='butttons'>
          <button
            ref={firstbtn}
            onClick={(e: any) => {
              setShow([...Contents.first]);
              setColor('blue');
              e.target.classList.add('blue');
              e.target.nextElementSibling.classList.remove('dark');
            }}
          >
            Monitoramento Online
          </button>
          <button
            onClick={({ target }: any) => {
              setShow([...Contents.second]);
              setColor('black');
              target.classList.add('dark');
              target.previousElementSibling.classList.remove('blue');
            }}
          >
            Gestao de ativos
          </button>
        </div>
        <div className={`content ${color === 'blue' ? 'blue' : 'dark'}`}>
          <div className='container div'>
            <ul>
              {show.map(({ src, p, title }, i) => {
                return (
                  <li key={i} onClick={() => setSrc(src)}>
                    <h3>
                      <span>{i + 1}</span>
                      {title}
                    </h3>
                    <p>{p}</p>
                  </li>
                );
              })}
            </ul>
            <div>
              <img src={src} alt='' />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Functiona;
