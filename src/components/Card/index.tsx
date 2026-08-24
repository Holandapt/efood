import * as S from './styles'

type Props = {
  title: string
  children: React.ReactNode
}

const Card = ({ title, children }: Props) => {
  return (
    <S.CartContainer>
      <S.Overlay />
      <S.Sidebar>
        <h2>{title}</h2>
        {children}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Card
