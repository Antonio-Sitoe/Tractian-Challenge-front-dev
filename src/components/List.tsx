import Image from 'next/image';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const animeLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(+60px);
  }

  to {
        opacity: 1;
    transform: translateX(0);
  }
`;
const close = keyframes`
  from {
         opacity: 1;
    transform: translateX(0);
    transition: all .3s;
  }

  to {
       opacity: 0;
    transform: translateX(+60px);

  }
`;
const ElementSvg = () => (
  <svg
    width='15'
    height='15'
    viewBox='0 0 15 15'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z'
      fill='currentColor'
      fill-rule='evenodd'
      clip-rule='evenodd'
    ></path>
  </svg>
);
interface Show {
  show: boolean;
}
const Mobile = styled.main<Show>`
  animation: ${(props) => (props.show ? animeLeft : close)} 0.3s forwards;
  background: white;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: block;
  transition: all;
  div {
    background: #e2e8f0;
    padding: 1rem;
    color: #252525;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: whitesmoke;
      color: #252525;
      cursor: pointer;
    }
  }
  ul {
    display: grid;
    gap: 1rem;
    padding: 1rem;
    div {
      width: 4rem;
      padding: 0.8rem;
      background: #dddddd;
      margin: 1rem;
    }

    li {
      margin: 1rem;
      cursor: pointer;
    }

    button {
      padding: 0.8rem;
      border: none;
      cursor: pointer;
      background: #1d4ed8;
      border-radius: 0.4rem;
      color: white;
      font-family: 'Poppins', sans-serif;
    }
  }
`;

interface Props {
  setShow: Function;
  show: boolean;
}
function List({ setShow, show }: Props) {
  function handle() {
    setShow(false);
  }
  return (
    <Mobile show={show}>
      <div>
        <Image src='/logotractianazul.svg' width={190} height={20} alt='logo' />
        <span onClick={handle}>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z'
              fill='currentColor'
              fillRule='evenodd'
              clipRule='evenodd'
            ></path>
          </svg>
        </span>
      </div>
      <ul>
        <li>
          Soluções <ElementSvg />
        </li>
        <li>
          Sobre Nós <ElementSvg />
        </li>
        <li>
          Materiais Gratuitos <ElementSvg />
        </li>
        <li>
          Blog <ElementSvg />
        </li>
        <li>
          Area do Cliente <ElementSvg />
        </li>
        <div>
          🇧🇷 PT <ElementSvg />
        </div>
        <button>Demonstração </button>
      </ul>
    </Mobile>
  );
}

export default List;
