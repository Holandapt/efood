import { Fundo, Logo, Subtitulo } from './styles'
import imgFundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Hero = () => (
  <Fundo style={{ backgroundImage: `url(${imgFundo})` }}>
    <Logo src={logo} alt="Logo" />
    <div className="container">
      <Subtitulo>
        Viva experiências gastronômicas no conforto da sua casa
      </Subtitulo>
    </div>
  </Fundo>
)

export default Hero
