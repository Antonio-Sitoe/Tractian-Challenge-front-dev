import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import List from './List';

const Style = styled.header`
  padding: 1.3rem 0;
  background: #224eb8;
  position: fixed;
  width: 100%;
  display: block;
  z-index: 1000;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      color: white;

      li {
        padding: 0.6rem 1rem;
        cursor: pointer;
        &:hover {
          color: whitesmoke;
          text-decoration: underline;
        }
      }
      div {
        background: #2149a7;
        padding: 0.6rem;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      a {
        color: white;
        text-decoration: none;
      }

      button {
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

    button.btn {
      display: none;
    }

    @media (max-width: 950px) {
      ul {
        li {
          display: none;
        }
      }
      div {
        display: none;
      }
      button.btn {
        display: block;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: white;
        border: 1px solid;
        cursor: pointer;
      }
    }
  }
`;
const Header = () => {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <Style>
      <nav className='container'>
        <ul>
          <Image src='/Logo-Tractian.svg' width={190} height={20} alt='logo' />
          <li>Soluções</li>
          <li>Sobre Nós</li>
          <li>Materiais Gratuitos</li>
          <li>Blog</li>
          <div>🇧🇷 PT</div>
        </ul>
        <div>
          <a href=''>Area do Cliente</a>
          <button>Demonstração</button>
        </div>
        <button className='btn' onClick={() => setShow(true)}>
          <svg
            width='20'
            height='20'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z'
              fill='white'
              fillRule='evenodd'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </nav>
      {show && <List setShow={setShow} show={show} />}
    </Style>
  );
};

export default Header;
