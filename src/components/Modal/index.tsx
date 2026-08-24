import { useDispatch } from 'react-redux'
import * as S from './styles'
import Close from '../../assets/images/close.png'
import Button from '../Button'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

type Props = {
  isOpen: boolean
  onClose: () => void
  product: CardapioItems | null
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
      <S.ModalContainer className={isOpen ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <S.CloseModal>
            <img onClick={onClose} src={Close} alt="Icone para fechar Modal" />
          </S.CloseModal>
          <S.ModalInfos>
            <S.ModalImage src={product.foto} alt="Imagem do produto" />
            <S.ModalDescription>
              <h2>{product.nome}</h2>
              <p> {product.descricao}</p>
              <span>Serve de: {product.porcao}</span>
              <Button
                onClinck={addToCart}
                title="Adicionar ao carrinho"
                type="button"
              >
                {`Adicionar ao carrinho - ${parseToBrl(product.preco)}`}
              </Button>
            </S.ModalDescription>
          </S.ModalInfos>
        </S.ModalContent>
        <div className="overlay" onClick={() => onClose()}></div>
      </S.ModalContainer>
    </>
  )
}

export default Modal
