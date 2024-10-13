import styled from 'styled-components'
import { DFlex } from '../../../styles/styles'

export const ContainerContent = styled.div`
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: max-content;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;

    padding: 20px 0px;
  }

  img {
    width: 80%;
    max-height: 340px;

    @media (max-width: 800px) {
      margin: 0 auto;
      width: 300px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    ul {
      width: max-content;

      @media (max-width: 500px) {
        width: 100%;
      }

      .espaco {
        margin-bottom: 15px;
      }

      li {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
`
