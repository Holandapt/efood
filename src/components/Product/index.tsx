import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../assets/images/nota.png'

import {
  Card,
  Container,
  Descricao,
  Titulo,
  Infos,
  CardHeader,
  Ponto,
  Nota
} from './styles'

type Props = {
  Title: string
  image: string
  descricao: string
  infos: string[]
  nota: string
}

const Product = ({ Title, image, descricao, infos, nota }: Props) => (
  <Card>
    <div className="container">
      <img src={image} alt={Title} />
      <Container>
        <CardHeader>
          <Titulo>{Title}</Titulo>
          <Ponto>
            <Nota>{nota}</Nota>
            <img src={estrela} alt="" />
          </Ponto>
        </CardHeader>
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
        <Descricao>{descricao}</Descricao>
        <Button
          type="link"
          title="Saiba mais sobre esse restaurante"
          to="/produto"
        >
          Saiba mais
        </Button>
      </Container>
    </div>
  </Card>
)

export default Product
