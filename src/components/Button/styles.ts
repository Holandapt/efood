import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors } from '../../styles'

export const ButtonContainer = styled.button`
  font-size: 14px;
  padding: 6px 4px;
  background-color: ${Colors.primaryColor};
  font-weight: bold;
  color: ${Colors.secondaryColor};
`
export const ButtonLink = styled(Link)`
  font-size: 14px;
  padding: 4px 6px;
  background-color: ${Colors.primaryColor};
  font-weight: bold;
  text-decoration: none;
  color: ${Colors.secondaryColor};
`
