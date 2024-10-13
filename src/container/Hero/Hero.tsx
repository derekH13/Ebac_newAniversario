import { BotaoPrimary, Interface, Title, Bold } from '../../styles/styles'
import * as S from './styles'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <S.Hero id="hero">
        <Interface>
          <span>
            <Title className="hero__title title--big">
              🎉Venha para a <Bold>minha festa de aniversario</Bold> 🎉 <br />{' '}
              no dia 30/03/2004
            </Title>
          </span>

          <S.items>
            <a href="#local">
              <BotaoPrimary className="btn btn--primary">Local</BotaoPrimary>
            </a>
            <a href="#formulario">
              <BotaoPrimary className="btn btn--primary">
                Marcar Presença
              </BotaoPrimary>
            </a>
          </S.items>

          <S.ContainerImg>
            <img className="hero__imagem" src="/assets/boneco.svg" alt="" />
          </S.ContainerImg>
        </Interface>
      </S.Hero>
    </motion.section>
  )
}

export default Hero
