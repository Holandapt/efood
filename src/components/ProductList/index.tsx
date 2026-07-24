import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { List } from './styles'
import Product from '../Product'
import Modal from '../Modal'
import { useGetCardapioQuery } from '../../service/api'

const ProductList = () => {
  const { id } = useParams()
  const { data: cardapio } = useGetCardapioQuery(id!)

  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [cardId, setCardId] = useState<number | null>(null)

  const clique = (id: number) => {
    setCardId(id)
    setModalEstaAberto(true)
  }

  const currentCardData =
    cardapio?.cardapio.find((card) => card.id === cardId) || null

  if (!cardapio)
    return (
      <>
        <h3>Carregando...</h3>
      </>
    )
  return (
    <div className="container">
      <List>
        {cardapio.cardapio.map((item) => (
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
