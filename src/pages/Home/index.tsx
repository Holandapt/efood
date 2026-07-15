import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import { useEffect, useState } from 'react'

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
  const [restaurante, setrestaurante] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setrestaurante(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantList restaurantes={restaurante} />
      <Footer />
    </>
  )
}
export default Home
