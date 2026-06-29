import pizza from '../../assets/images/Pizza.png'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import ProductList from '../../components/ProductList'
import Products from '../../models/Products'

const Product: Products[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  }
]

const Perfil = () => (
  <>
    <Header />
    <Presentation />
    <ProductList product={Product} />
    <Footer />
  </>
)

export default Perfil
