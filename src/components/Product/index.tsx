import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Button from '../Button'
import close from '../../assets/images/close.png'
import {
  Card,
  Container,
  Descricao,
  Titulo,
  CardHeader,
  CloseModal,
  Modal,
  ModalContent,
  ModalDescricao,
  ModalImage,
  ModalInfos
} from './styles'
import { Restaurante } from '../../pages/Home'

const Product = () => {
  const { id } = useParams()
  const [modalEstaAberto, setModalEstaAberto] = useState(false)
  const [cardapio, setcardapio] = useState<Restaurante>()

  const getDescricao = (descricao: string) => {
    if (descricao.length > 179) {
      return descricao.slice(0, 176) + '...'
    }
    return descricao
  }

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setcardapio(res))
  }, [id])

  if (!cardapio) {
    return <h3> Carregando...</h3>
  }

  const lidarComClique = () => {
    return setModalEstaAberto(true)
  }
  return (
    <>
      {cardapio.cardapio.map((produto) => (
        <Card key={produto.id}>
          <Container>
            <img src={produto.foto} alt={produto.nome} />
            <CardHeader>
              <Titulo>{produto.nome}</Titulo>
            </CardHeader>
            <Descricao>{getDescricao(produto.descricao)}</Descricao>
            <Button
              type="button"
              onClinck={lidarComClique}
              title="Saiba mais sobre esse restaurante"
            >
              Adicionar ao carrinho
            </Button>
          </Container>
        </Card>
      ))}
      {cardapio.cardapio.map((produto) => (
        <Modal key={produto.id} className={modalEstaAberto ? 'visivel' : ''}>
          <ModalContent className="container">
            <CloseModal>
              <img
                src={close}
                alt="Icone para fechar Modal"
                onClick={() => setModalEstaAberto(false)}
              />
            </CloseModal>
            <ModalInfos>
              <ModalImage src={produto.foto} alt="Imagem do produto" />
              <ModalDescricao>
                <h2>{produto.nome}</h2>
                <p> {produto.descricao}</p>
                <span>{`Serve: ${produto.porcao}`}</span>
                <Button
                  title="Adicionar ao carrinho"
                  type="link"
                  onClinck={lidarComClique}
                >
                  {`Adicionar ao carrinho - R$ ${produto.preco}`}
                </Button>
              </ModalDescricao>
            </ModalInfos>
          </ModalContent>
          <div
            className="overlay"
            onClick={() => setModalEstaAberto(false)}
          ></div>
        </Modal>
      ))}
    </>
  )
}

export default Product
