import { Bold, Interface, Title } from '../../../styles/styles'
import * as S from './styles'
import { motion } from 'framer-motion'

const Local = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <S.LocalEstilo id="local">
        <Interface>
          <S.ContainerImage>
            <img
              src="https://i.pinimg.com/564x/ac/11/0d/ac110d56f0bb5ca49c13f2e8d5be2468.jpg"
              alt=""
            />
          </S.ContainerImage>

          <Title>🥳Festival do Lago Encantado🥳</Title>

          <S.Content>
            <span>
              <Bold>Descrição:</Bold> A festa acontece à beira de um lago
              cristalino, cercado por uma bela floresta. O ambiente é perfeito
              para uma celebração cheia de alegria, música e diversão.
            </span>
            <span>
              <Bold>Data e Horário:</Bold> De 15 a 20 de novembro, das 10h às
              22h, com feiras de artesanato e apresentações musicais.
            </span>
            <span>
              <Bold>Estacionamento:</Bold> Disponível para 500 veículos por R$
              20,00 a diária, com transporte gratuito do centro da cidade a cada
              30 minutos.
            </span>
          </S.Content>
        </Interface>
      </S.LocalEstilo>
    </motion.section>
  )
}

export default Local
