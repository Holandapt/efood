import {
  ModalContainer,
  CloseModal,
  ModalContent,
  ModalDescricao,
  ModalImage,
  ModalInfos
} from './styles'
import close from '../../assets/images/close.png'
import pizza from '../../assets/images/Pizza.png'
import Button from '../Button'
import { CardapioItems, Restaurante } from '../../pages/Home'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Props = {
  isOpen: boolean
  onClose: () => void
  product: CardapioItems | null
}

const Modal = ({ isOpen, onClose, product }: Props) => {
  if (!isOpen) return null
  if (!product) return null

  return (
    <>
      <ModalContainer className={isOpen ? 'visivel' : ''}>
        <ModalContent className="container">
          <CloseModal>
            <img onClick={onClose} src={close} alt="Icone para fechar Modal" />
          </CloseModal>
          <ModalInfos>
            <ModalImage src={product.foto} alt="Imagem do produto" />
            <ModalDescricao>
              <h2>{product.nome}</h2>
              <p> {product.descricao}</p>
              <span>Serve de: {product.porcao}</span>
              <Button title="Adicionar ao carrinho" type="link">
                {`Adicionar ao carrinho - R$ ${product.preco}`}
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
