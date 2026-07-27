import { useDispatch } from 'react-redux'
import {
  ModalContainer,
  CloseModal,
  ModalContent,
  ModalDescricao,
  ModalImage,
  ModalInfos
} from './styles'
import Close from '../../assets/images/close.png'
import Button from '../Button'
import { CardapioItems } from '../../pages/Home'
import { add, open } from '../../store/reducers/cart'

type Props = {
  isOpen: boolean
  onClose: () => void
  product: CardapioItems | null
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Modal = ({ isOpen, onClose, product }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    ;(dispatch(add(product!), dispatch(open())), onClose())
  }

  if (!isOpen) return null
  if (!product) return null

  return (
    <>
      <ModalContainer className={isOpen ? 'visivel' : ''}>
        <ModalContent className="container">
          <CloseModal>
            <img onClick={onClose} src={Close} alt="Icone para fechar Modal" />
          </CloseModal>
          <ModalInfos>
            <ModalImage src={product.foto} alt="Imagem do produto" />
            <ModalDescricao>
              <h2>{product.nome}</h2>
              <p> {product.descricao}</p>
              <span>Serve de: {product.porcao}</span>
              <Button
                onClinck={addToCart}
                title="Adicionar ao carrinho"
                type="button"
              >
                {`Adicionar ao carrinho - ${formataPreco(product.preco)}`}
              </Button>
            </ModalDescricao>
          </ModalInfos>
        </ModalContent>
        <div className="overlay" onClick={() => onClose()}></div>
      </ModalContainer>
    </>
  )
}

export default Modal
