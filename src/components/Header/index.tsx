import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import imgFundo from '../../assets/images/fundo.png'
import { Logo } from '../Hero/styles'
import { Menu } from './styles'
import { ButtonLink } from '../Button/styles'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()

  const { pratos } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Menu style={{ backgroundImage: `url(${imgFundo})` }}>
      <div className="container">
        <ButtonLink type="link" title="Voltar para home" to="/">
          Restaurantes
        </ButtonLink>
        <Logo src={logo} />
        <ButtonLink
          onClick={openCart}
          type="link"
          title="Ir para o carrinho"
          to="#"
        >
          {pratos.length} produtos(s) no carrinho
        </ButtonLink>
      </div>
    </Menu>
  )
}

export default Header
