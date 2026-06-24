import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles'

export const ButtonContainer = styled.button`
  font-size: 14px;
  padding: 6px 4px;
  background-color: ${Cores.CorPrimary};
  font-weight: bold;
  color: ${Cores.CorSecondary};
`
export const ButtonLink = styled(Link)`
  font-size: 14px;
  padding: 4px 6px;
  background-color: ${Cores.CorPrimary};
  font-weight: bold;
  text-decoration: none;
  color: ${Cores.CorSecondary};
`
