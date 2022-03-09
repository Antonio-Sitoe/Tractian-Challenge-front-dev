import styled from 'styled-components';
import { color } from '../theme';

const Content = [
  {
    title: 'PRODUTO',
    list: [
      'Sensor Tractian',
      'Plataforma',
      'Funcionalidades',
      'Planos e preços',
    ],
  },
  {
    title: 'MATERIAIS',
    list: ['Guias e Ebooks', 'Checklists', 'Intensivão', 'Calculadora'],
  },
  {
    title: 'SOBRE A TRACTIAN',
    list: [
      'Conheça a Tractian',
      'Histórias de Sucesso',
      'Imprensa',
      'Trabalhe conosco',
      'Política de Privacidade',
    ],
  },
  {
    title: 'FALE CONOSCO',
    list: ['Contato', 'Indique e Ganhe', 'Agende uma demonstração'],
  },
];

const Titles = styled.h3`
  text-transform: uppercase;
  color: #7ce7f2;
  font-weight: bold;
  margin: 0 0 1rem 0;
`;
const FooterStyle = styled.footer`
  background: ${color.bgBlue};
  margin:  0;
  padding: 4rem 0;
`;
const List = styled.nav`
  color: white;
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  div {
    max-width: 10rem;
  }

  section {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;

    ul {
      margin: 0 1rem;

      li {
        margin: 1rem 0;
        line-height: 1.5;
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    div {
      margin: 2rem auto;
    }
  }
`;
const Navigation = styled.nav`
  padding: 3rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      margin: 1rem;
      img {
        width: 4rem;
      }
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    ul {
      margin: 1rem 0;
    }
  }
`;

const SocialMedia = styled.ul`
  li {
    img {
      width: 2rem !important;
    }
  }
`;

const Footer = () => {
  return (
    <FooterStyle>
      <div className='container'>
        <List>
          <section>
            {Content.map(({ title, list }, i) => {
              return (
                <ul key={i}>
                  <Titles>{title}</Titles>
                  {list.map((item) => {
                    return <li key={item}>{item}</li>;
                  })}
                </ul>
              );
            })}
          </section>
        </List>

        <Navigation>
          <div>
            <Titles>Investidores</Titles>
            <ul>
              <li>
                <img src='/logo-citrino-branca-custom.png' alt='' />
              </li>
              <li>
                <img src='/logo-ycombinator-branca.png' alt='' />
              </li>
              <li>
                <img src='/logo-dgf-branca-custom.png' alt='' />
              </li>
            </ul>
          </div>
          <div>
            <Titles>Reconhecimento</Titles>
            <ul>
              <li>
                <img src='/logo-gptw.png' alt='' />
              </li>
              <li>
                <img src='/logo-stw.png' alt='' />
              </li>
              <li>
                <img src='/capterra-badge.png' alt='' />
              </li>
            </ul>
          </div>
          <div>
            <Titles>CONECTE-SE COM A TRACTIAN</Titles>
            <SocialMedia>
              <li>
                <img src='/linkedin.png' alt='' />
              </li>
              <li>
                <img src='/facebook.png' alt='' />
              </li>
              <li>
                <img src='/instagram.png' alt='' />
              </li>
              <li>
                <img src='/youtube.png' alt='' />
              </li>
            </SocialMedia>
          </div>
        </Navigation>
      </div>
    </FooterStyle>
  );
};

export default Footer;
