import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  height: 280px;
  background-size: cover;
`

export const Infor = styled.h2`
  margin-top: 24px;
  font-size: 32px;
  color: #ffff;
  font-style: thin;
  font-weight: 100;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: #ffff;
  margin-top: 156px;
  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 140px;
  }
`
