import { Banner, Infor, Titulo } from './styles'
import bannerimg from '../../assets/images/Italiana.png'

const Presentation = () => (
  <Banner
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerimg})`
    }}
  >
    <div className="container">
      <Infor>Italiana</Infor>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </div>
  </Banner>
)

export default Presentation
