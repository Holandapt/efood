import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Restaurante } from '../../pages/Home'
import { List } from './styles'
import Product from '../Product'
import Modal from '../Modal'

const ProductList = () => {
  const { id } = useParams()
  const [pratos, setPratos] = useState<Restaurante>()
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [cardId, setCardId] = useState<number | null>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPratos(res))
  }, [id])

  const clique = (id: number) => {
    setCardId(id)
    setModalEstaAberto(true)
  }

  const currentCardData =
    pratos?.cardapio.find((card) => card.id === cardId) || null

  if (!pratos)
    return (
      <>
        <h3>Carregando...</h3>
      </>
    )
  return (
    <div className="container">
      <List>
        {pratos.cardapio.map((item) => (
          <li key={item.id}>
            <Product
              descricao={item.descricao}
              id={item.id}
              foto={item.foto}
              nome={item.nome}
              onOpen={() => clique(item.id)}
            />
          </li>
        ))}
        <Modal
          product={currentCardData}
          isOpen={modalEstaAberto}
          onClose={() => setModalEstaAberto(false)}
        />
      </List>
    </div>
  )
}

export default ProductList
