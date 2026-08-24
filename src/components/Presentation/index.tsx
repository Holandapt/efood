import * as S from './styles'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGetRestauranteQuery } from '../../service/api'
import Loader from '../Loader'

const Presentation = () => {
  const { id } = useParams()
  const [apresentacao, setApresentacao] = useState<Restaurante>()
  const { isLoading } = useGetRestauranteQuery()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setApresentacao(res))
  }, [id])

  if (isLoading) {
    return <Loader />
  }

  return (
    <S.Banner
      key={apresentacao?.capa}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${apresentacao?.capa})`
      }}
    >
      <div className="container">
        <S.Infor>{apresentacao?.tipo}</S.Infor>
        <S.Title>{apresentacao?.titulo}</S.Title>
      </div>
    </S.Banner>
  )
}

export default Presentation
