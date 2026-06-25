import logo from '../../assets/images/logo.png'
import imgFundo from '../../assets/images/fundo.png'
import { Logo } from '../Hero/styles'
import { Menu } from './styles'
import { ButtonLink } from '../Button/styles'

const Header = () => (
  <Menu style={{ backgroundImage: `url(${imgFundo})` }}>
    <div className="container">
      <ButtonLink type="link" title="Voltar para home" to="/">
        Restaurantes
      </ButtonLink>
      <Logo src={logo} />
      <ButtonLink type="link" title="Ir para o carrinho" to="#">
        0 produtos(s) no carrinho
      </ButtonLink>
    </div>
  </Menu>
)

export default Header
