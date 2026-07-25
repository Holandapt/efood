import { useDispatch, useSelector } from 'react-redux'
import pizza from '../../assets/images/Pizza.png'
import Button from '../Button'
import { CartContaine, CartItem, Details, Overlay, Sidebar } from './styles'
import { RootReducer } from '../../store/index'
import { close } from '../../store/reducers/cart'
import { formataPreco } from '../Modal'

const Cart = () => {
  const dispatch = useDispatch()
  const { isOpen, pratos } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  // const getTotalPrice = () => {
  //   return pratos.reduce((acumulador, valorAtual) => {
  //     return (acumulador += valorAtual.preco!)
  //   })
  // }

  return (
    <CartContaine className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {pratos.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt="" />
              <div>
                <h3>{item.nome}</h3>
                <p>{formataPreco(item.preco)}</p>
              </div>
              <button type="button" />
            </CartItem>
          ))}
          <Details>
            <p>Valor total</p>
            <span>R$ 182,70</span>
          </Details>
          <Button type="button" title="Clique aqui para seguir com a compra">
            Continuar com a entrega
          </Button>
        </ul>
      </Sidebar>
    </CartContaine>
  )
}

export default Cart
