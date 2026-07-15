import { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import ProductList from '../../components/ProductList'
import { Restaurante } from '../Home'
import { useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <>
      <Header />
      <Presentation />
      <ProductList product={cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
