import styled from 'styled-components';
import { Input } from './Input';

const ContactStyle = styled.section`
  color: whitesmoke;
  padding: 3rem 0;
  background-image: linear-gradient(
    to right bottom,
    #245ee2,
    #2546ba,
    #1f3094,
    #151b70,
    #07074e
  );
  main {
    max-width: 40rem;
    padding: 0 1rem;
    margin: 2rem auto;

    h2 {
      text-align: center;
      font-size: 2.25rem;
      line-height: 1;
    }

    p {
      text-align: center;
      margin: 1rem 0;
    }
  }
`;
const Form = styled.form`
  section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  label {
    display: block;
    margin: 0.6rem 0;
  }

  button {
    display: block;
    width: 100%;
    padding: 0.7rem;
    margin: 1rem 0;
    border: none;
    border-radius: 0.3rem;
    background: #22c55e;
    color: white;
  }
`;
function Contact() {
  return (
    <ContactStyle>
      <main>
        <h2>Melhore os seus processos de manutenção</h2>
        <p>Preencha o formulário para uma demonstração.</p>

        <Form action=''>
          <Input id='nome' label='Nome' placeholder='Insira o seu nome' />
          <Input id='Cargo' label='Cargo' placeholder='Insira o seu Cargo' />

          <section>
            <Input
              id='email'
              label='Email'
              placeholder='Insira o seu email profissional'
            />
            <Input id='tel' label='Telefone' placeholder='(xx) xxxx-xxxx  ' />
          </section>

          <div>
            <p>O que mais te interessou nas nossas soluções?</p>

            <label htmlFor=''>
              <input type='radio' name='' id='' />
              Monitoramento Online e Sensores
            </label>
            <label htmlFor=''>
              <input type='radio' name='' id='' />
              Software de Gestão da Manutenção e PCM
            </label>
            <label htmlFor=''>
              <input type='radio' name='' id='' />
              Todas as Soluções
            </label>
            <button>Enviar</button>
          </div>
        </Form>
      </main>
    </ContactStyle>
  );
}

export default Contact;
