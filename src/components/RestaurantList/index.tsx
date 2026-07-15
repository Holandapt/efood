import { List } from './styles'
import { Restaurante } from '../../pages/Home'
import Restaurant from '../Restaurant'

export type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => {
  const getRestaurantTags = (restaurantes: Restaurante) => {
    const tags = []

    if (restaurantes.destacado) {
      tags.push(`Destaque da semana`)
    }

    if (restaurantes.tipo) {
      tags.push(restaurantes.tipo)
    }

    return tags
  }

  return (
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurant
            id={restaurante.id}
            key={restaurante.destacado}
            nota={restaurante.avaliacao}
            Title={restaurante.titulo}
            descricao={restaurante.descricao}
            infos={getRestaurantTags(restaurante)}
            image={restaurante.capa}
          />
        ))}
      </List>
    </div>
  )
}

export default RestaurantList
