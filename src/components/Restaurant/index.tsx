import Button from '../Button'
import Tag from '../Tag'
import estrela from '../../assets/images/nota.png'
import * as S from './styles'

type Props = {
  id: number
  Title: string
  image: string
  descricao: string
  infos: string[]
  nota: string
}

const Restaurant = ({ Title, image, descricao, infos, nota, id }: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 278) {
      return descricao.slice(0, 275) + '...'
    }
    return descricao
  }
  return (
    <S.Card to={`Perfil/${id}`}>
      <div className="container">
        <S.Cover src={image} alt={Title} />
        <S.Container>
          <S.CardHeader>
            <S.Title>{Title}</S.Title>
            <S.Ponto>
              <S.Nota>{nota}</S.Nota>
              <img src={estrela} alt="" />
            </S.Ponto>
          </S.CardHeader>
          <S.Infos>
            {infos.map((info) => (
              <Tag key={info}>{info}</Tag>
            ))}
          </S.Infos>
          <S.Description>{getDescription(descricao)}</S.Description>
          <Button
            type="link"
            title="Saiba mais sobre esse restaurante"
            to={`/Perfil/${id}`}
          >
            Saiba mais
          </Button>
        </S.Container>
      </div>
    </S.Card>
  )
}

export default Restaurant
