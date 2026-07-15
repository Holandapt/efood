import Product from '../Product'
import { List } from './styles'
import { Restaurante } from '../../pages/Home'

export type Props = {
  product: Restaurante[]
}

const ProductList = ({ product }: Props) => {
  return (
    <div className="container">
      <List>
        <Product />
      </List>
    </div>
  )
}

export default ProductList
