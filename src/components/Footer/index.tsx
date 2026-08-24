import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instavector.png'
import face from '../../assets/images/facevector.png'
import twt from '../../assets/images/twittervector.png'
import { Container, Logo, Redes, RedeSocial, TextoFooter } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <Logo src={logo} alt="Logotipo" />
      <Redes>
        <li>
          <RedeSocial href="#" title="Instagram">
            <img src={insta} alt="" />
          </RedeSocial>
        </li>
        <li>
          <RedeSocial href="#" title="Facebook">
            <img src={face} alt="" />
          </RedeSocial>
        </li>
        <li>
          <RedeSocial href="#" title="Twitter">
            <img src={twt} alt="" />
          </RedeSocial>
        </li>
      </Redes>
      <TextoFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade
        <br /> dos produtos é toda do estabelecimento contratado.
      </TextoFooter>
    </div>
  </Container>
)

export default Footer
