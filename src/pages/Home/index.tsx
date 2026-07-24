import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestauranteQuery } from '../../service/api'

export interface CardapioItems {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado?: string
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: CardapioItems[]
}

const Home = () => {
  const { data: restaurante } = useGetRestauranteQuery()

  if (restaurante) {
    return (
      <>
        <Hero />
        <RestaurantList restaurantes={restaurante} />
        <Footer />
      </>
    )
  }
  return <h4>Carregando...</h4>
}
export default Home
