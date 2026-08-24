import { PulseLoader } from 'react-spinners'
import { Colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
    <PulseLoader color={Colors.primaryColor} />
  </Container>
)

export default Loader
