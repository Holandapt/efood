import Product from '../Product'
import { List } from './styles'
import Restaurante from '../../models/Restaurantes'

export type Props = {
  restaurantes: Restaurante[]
}

const ProductList = ({ restaurantes }: Props) => (
  <div className="container">
    <List>
      {restaurantes.map((restaurante) => (
        <Product
          key={restaurante.id}
          nota={restaurante.nota}
          Title={restaurante.title}
          descricao={restaurante.description}
          infos={restaurante.infos}
          image={restaurante.image}
        />
      ))}
    </List>
  </div>
)

export default ProductList
