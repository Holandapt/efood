import Button from '../Button'

import { Card, Container, Descricao, Titulo, CardHeader } from './styles'

type Props = {
  Title: string
  image: string
  descricao: string
}

const Product = ({ Title, image, descricao }: Props) => (
  <Card>
    <div className="container">
      <img src={image} alt={Title} />
      <Container>
        <CardHeader>
          <Titulo>{Title}</Titulo>
        </CardHeader>
        <Descricao>{descricao}</Descricao>
        <Button
          type="link"
          title="Saiba mais sobre esse restaurante"
          to="/Perfil"
        >
          Saiba mais
        </Button>
      </Container>
    </div>
  </Card>
)

export default Product
