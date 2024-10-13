import { TitleSmall } from '../../../styles/styles'
import * as S from './styles'

const InfoFesta = () => {
  return (
    <S.ContainerContent>
      <div>
        <ul>
          <TitleSmall className="espaco">🎈Sobre a festa🎈</TitleSmall>

          <li>Começa ás 15:00, e termina ás 22:00</li>
          <li>Entrada permitina apenas para que tem o convite</li>
          <li>Festa fantasia, quem poder traga a sua fantasia</li>
          <li>Respeito aos graçom e organização no salão de festa</li>
          <li>Show de pagode as 18:00</li>
        </ul>
      </div>

      <img src="./assets/parabens.svg" alt="" />
    </S.ContainerContent>
  )
}

export default InfoFesta
