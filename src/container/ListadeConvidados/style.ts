import styled from 'styled-components'

export const ListadeConvidado = styled.div`
  margin: 10rem 0px 0px 0px;
`

export const TableEstilo = styled.table`
  border-radius: 20px;
  overflow: hidden;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 2px 2px 30px #14344d, -2px -2px 30px #14344d;
  margin-top: 8rem;

  @media (max-width: 697px) {
    th,
    td {
      max-width: 50px;
      overflow: hidden;
    }
  }
`

export const Formulario = styled.form`
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 40px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;

  label {
    display: block;
    font-size: 18px;
    font-weight: 700;
    color: white;
  }

  .btn {
    margin-top: 2rem;
    width: 100%;
  }

  input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    width: 100%;
    border-radius: 10px;
    box-sizing: border-box;
    transition: border-color 0.3s;
    margin-bottom: 20px;

    &:focus {
      border-color: #007bff; /* Cor do foco */
      outline: none; /* Remove o contorno padrão */
    }
  }
`
