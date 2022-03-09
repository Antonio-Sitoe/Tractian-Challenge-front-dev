import styled from 'styled-components';

const Section = styled.section`
  .container {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;

    div {
      background: white;
      img {
        max-width: 20rem;
        margin: 1rem auto;
      }
    }
  }
  padding: 6rem 0;
  background: whitesmoke;
`;

const CardMain = styled.div`
  background: white;
  border-radius: 0.3rem;

  .card-body {
     box-shadow:  0 0 #0000, 0 0 #0000,0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1);
    h2 {
      font-size: 1.2rem;
      color: #224eb8;
      margin: 1rem 0;
    }
    padding: 2rem;
    ul {
      display: grid;
      gap: 1rem;

      li {
        font-size: 1rem;
        line-height: 1.5;
        border-bottom: 1px solid #e4e7f0;
        padding: 1rem 0;
      }
    }
  }
`;
const Hire = styled.div`
  display: block;
    box-shadow:  0 0 #0000, 0 0 #0000,0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1);
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;

  p {
    margin: 1rem 0;
    line-height: 1.5;
  }

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
`;
const Card = () => (
  <CardMain>
    <div className='card-body'>
      <h2>LEIA NO BLOG</h2>
      <ul>
        <li>Como o rastreador veicular pode melhorar a gestão da empresa</li>
        <li>O que é roteirização?</li>
        <li>Telemetria veicular: tudo o que você precisa saber</li>
        <li>O que é roteirização?</li>
        <li>Telemetria veicular: tudo o que você precisa saber</li>
      </ul>
    </div>
  </CardMain>
);

const BlogAndHire = () => {
  return (
    <Section>
      <div className='container'>
        <Card />
        <Hire>
          <img src='/leo-e-mih.png' alt='' />
          <p>
            Nao perca a oportunidade de trabalhar na melhor empresa de
            manutencao da America Latina
          </p>
          <button>Venha trabalhar conosco</button>
        </Hire>
      </div>
    </Section>
  );
};

export default BlogAndHire;
