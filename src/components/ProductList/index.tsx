import Product from '../Product'
import pizza from '../../assets/images/Pizza.png'
import { List } from './styles'
import Products from '../../models/Products'

export type Props = {
  product: Products[]
}

const ProductList = ({ product }: Props) => (
  <div className="container">
    <List>
      {product.map((produto) => (
        <Product
          key={produto.id}
          Title={produto.title}
          descricao={produto.description}
          image={produto.image}
        />
      ))}
    </List>
  </div>
)

export default ProductList
