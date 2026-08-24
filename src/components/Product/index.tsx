import * as S from './styles'
import Button from '../Button'

type Props = {
  foto: string
  preco?: number
  id: number
  nome: string
  descricao: string
  porcao?: string
  onOpen: () => void
}

const Product = ({ foto, descricao, id, nome, onOpen }: Props) => {
  // Função que define o tamanho da descrição aprensentada
  const getDescription = (descricao: string) => {
    if (descricao.length > 179) {
      return descricao.slice(0, 169) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.Card key={id}>
        <S.Container>
          <img src={foto} alt={nome} />
          <S.CardHeader>
            <S.Title>{nome}</S.Title>
          </S.CardHeader>
          <S.Description>{getDescription(descricao)}</S.Description>
          <Button
            onClinck={onOpen}
            type="button"
            title="Saiba mais sobre esse restaurante"
          >
            Adicionar ao carrinho
          </Button>
        </S.Container>
      </S.Card>
    </>
  )
}

export default Product
