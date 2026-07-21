import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import ProductList from '../../components/ProductList'
import { Restaurante } from '../Home'

const Perfil = () => {
  return (
    <>
      <Header />
      <Presentation />
      <ProductList />
      <Footer />
    </>
  )
}

export default Perfil
