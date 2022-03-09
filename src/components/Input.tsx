import styled from 'styled-components';

interface InputProps {
  label: string;
  id: string;
  placeholder: string;
}

const Style = styled.div`
  display: grid;
  margin: 0.6rem 0;
  input {
    padding: 0.6rem;
    border: none;
    font-size: 1rem;
    border-radius: 0.3rem;
    width: 100%;
  }
`;
export const Input = ({ label, id, placeholder }: InputProps) => {
  return (
    <Style>
      <label htmlFor={id}>{label}</label>
      <input type='text' id={id} placeholder={placeholder} />
    </Style>
  );
};
