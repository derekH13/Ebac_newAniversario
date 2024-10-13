import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #333;
    line-height: 1.6;
    background-color: black;
  }
`

export const DFlex = styled.div`
  display: flex;
`

export const Botao = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 100%;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 15px;
  text-decoration: none;
  padding: 8px 14px;
  // ===========================================================
  letter-spacing: 1px;
  cursor: pointer;
`

export const Title = styled.h1`
  color: white;
  font-size: 44px;
  font-weight: 500;
  text-align: center;

  @media (max-width: 697px) {
    font-size: 34px;
  }
`

export const TitleSmall = styled(Title)`
  font-size: 36px;
`

export const Bold = styled.span`
  font-weight: bold;
`

export const Interface = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 95%;
    margin: 0 auto;
  }
`

export const BotaoPrimary = styled(Botao)`
  color: white;
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);

  &:hover {
    background-color: white;
  }
`

export const FooterEstilo = styled.footer`
  background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`

export default GlobalStyle
