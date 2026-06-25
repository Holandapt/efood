import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Cores } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  margin-bottom: 48px;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
  }
`
export const Container = styled.div`
  padding: 8px;
  border-right: 1px solid ${Cores.CorPrimary};
  border-left: 1px solid ${Cores.CorPrimary};
  border-bottom: 1px solid ${Cores.CorPrimary};
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

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${Cores.CorPrimary};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${Cores.CorPrimary};
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
  color: ${Cores.CorPrimary};
`
