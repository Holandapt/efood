import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../Button'
import * as S from './styles'
import { RootReducer } from '../../store/index'
import { close, remove } from '../../store/reducers/cart'
import { open } from '../../store/reducers/checkout'
import { parseToBrl } from '../../utils'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isOpen, pratos } = useSelector((state: RootReducer) => state.cart)

  const closeCart = () => {
    dispatch(close())
  }

  const goToCheckout = () => {
    dispatch(close())
    navigate('/checkout')
    dispatch(open())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return pratos.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  return (
    <S.CartContaine className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {pratos.length > 0 ? (
          <ul>
            <S.CartBox>
              {pratos.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt="" />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{parseToBrl(item.preco)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </S.CartBox>
            <S.Details>
              <p>Valor total</p>
              <span>{parseToBrl(getTotalPrice())}</span>
            </S.Details>
            <Button
              onClinck={() => goToCheckout()}
              type="button"
              title="Clique aqui para seguir com a compra"
            >
              Continuar com a entrega
            </Button>
          </ul>
        ) : (
          <>
            <p>
              O carrinho esta vazio, adicione pelo menos um produto para
              continuar com a compra.
            </p>
          </>
        )}
      </S.Sidebar>
    </S.CartContaine>
  )
}

export default Cart
