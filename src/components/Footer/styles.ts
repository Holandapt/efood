import styled from 'styled-components'
import { Cores } from '../../styles'

export const Container = styled.footer`
  display: block;
  text-align: center;
  background-color: ${Cores.CorSecondary};
  height: 298px;
`
export const Logo = styled.img`
  margin-top: 40px;
  margin-bottom: 32px;
`
export const Redes = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
`
export const RedeSocial = styled.a`
  margin-left: 8px;
`
export const TextoFooter = styled.p`
  font-size: 10px;
  color: ${Cores.CorPrimary};
  margin: 0 auto;
`
