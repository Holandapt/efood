import { Card, Container, Descricao, Titulo, CardHeader } from './styles'
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
  const getDescricao = (descricao: string) => {
    if (descricao.length > 179) {
      return descricao.slice(0, 176) + '...'
    }
    return descricao
  }

  return (
    <>
      <Card key={id}>
        <Container>
          <img src={foto} alt={nome} />
          <CardHeader>
            <Titulo>{nome}</Titulo>
          </CardHeader>
          <Descricao>{getDescricao(descricao)}</Descricao>
          <Button
            onClinck={onOpen}
            type="button"
            title="Saiba mais sobre esse restaurante"
          >
            Adicionar ao carrinho
          </Button>
        </Container>
      </Card>
    </>
  )
}

export default Product
