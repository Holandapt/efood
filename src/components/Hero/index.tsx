import * as S from './styles'
import imgBckg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <S.Background style={{ backgroundImage: `url(${imgBckg})` }}>
    <S.Logo src={logo} alt="Logo" />
    <div className="container">
      <S.Subtitle>
        Viva experiências gastronômicas no conforto da sua casa
      </S.Subtitle>
    </div>
  </S.Background>
)

export default Hero
