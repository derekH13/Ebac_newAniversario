import React from 'react'
import Hero from './container/Hero/Hero'
import GlobalStyle from './styles/styles'
import InfoFesta from './container/Hero/InfoFesta/InfoFesta'
import Local from './container/Hero/Local/Local'
import ListadeConvidados from './container/ListadeConvidados/ListadeConvidados'
import Footer from './container/Footer/Footer'
import Navgation from './container/Navgation/Navgation'

function App() {
  return (
    <>
      <GlobalStyle />
      <Navgation />
      <Hero />
      <InfoFesta />
      <Local />
      <ListadeConvidados />
      <Footer />
    </>
  )
}

export default App
