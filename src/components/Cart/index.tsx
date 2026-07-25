import pizza from '../../assets/images/Pizza.png'
import Button from '../Button'
import { CartContaine, CartItem, Details, Overlay, Sidebar } from './styles'
const Cart = () => (
  <CartContaine>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizza} alt="" />
          <div>
            <h3>Nome do produto</h3>
            <p>R$ 60,90</p>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} alt="" />
          <div>
            <h3>Nome do produto</h3>
            <p>R$ 60,90</p>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizza} alt="" />
          <div>
            <h3>Nome do produto</h3>
            <p>R$ 60,90</p>
          </div>
          <button type="button" />
        </CartItem>
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

export default Cart
