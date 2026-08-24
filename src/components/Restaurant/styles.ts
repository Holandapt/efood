import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { breakpoints, Colors } from '../../styles'
import { ButtonLink } from '../Button/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  height: 100%;
  margin-bottom: 48px;
  position: relative;
  text-decoration: none;
`

export const Cover = styled.img`
  display: block;
  width: 472px;
  height: 217px;
  object-fit: cover;
  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }
`

export const Container = styled.div`
  padding: 8px;
  border-right: 1px solid ${Colors.primaryColor};
  border-left: 1px solid ${Colors.primaryColor};
  border-bottom: 1px solid ${Colors.primaryColor};
  ${TagContainer} {
    margin-right: 8px;
  }

  ${ButtonLink} {
    display: inline-block;
    text-align: center;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.primaryColor};
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.primaryColor};
  margin-bottom: 16px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
`
export const Ponto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Nota = styled.span`
  margin-right: 8px;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: ${Colors.primaryColor};
`
