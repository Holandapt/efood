import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import RestaurantList from '../../components/RestaurantList'
import { useGetRestauranteQuery } from '../../service/api'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurante } = useGetRestauranteQuery()

  if (restaurante) {
    return (
      <>
        <Hero />
        <RestaurantList restaurantes={restaurante} />
        <Footer />
      </>
    )
  }
  return <Loader />
}
export default Home
