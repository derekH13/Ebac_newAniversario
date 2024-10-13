import styled from 'styled-components'
import { Title } from '../../styles/styles'

export const Hero = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 190px;
  overflow: hidden;
`

export const items = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
  gap: 24px;
  margin: 0 auto;
  padding-top: 3rem;

  @media (max-width: 697px) {
    padding-left: 0px;
  }

  a {
    text-decoration: none;
  }
`

export const ContainerTimer = styled(Title)`
  width: 100%;
  padding: 10px 0px;
  border: solid 2px white;
  border-radius: 10px;
  margin: 5rem 0px 5rem 0px;
`

export const ContainerImg = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    height: 500px;

    @media (max-width: 697px) {
      height: auto;
      width: 70%;
    }
  }
`
