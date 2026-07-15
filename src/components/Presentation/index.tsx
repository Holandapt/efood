import { Banner, Infor, Titulo } from './styles'
import { Restaurante } from '../../pages/Home'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Presentation = () => {
  const { id } = useParams()
  const [apresentacao, setApresentacao] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setApresentacao(res))
  }, [id])

  return (
    <Banner
      key={apresentacao?.id}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${apresentacao?.capa})`
      }}
    >
      <div className="container">
        <Infor>{apresentacao?.tipo}</Infor>
        <Titulo>{apresentacao?.titulo}</Titulo>
      </div>
    </Banner>
  )
}

export default Presentation
