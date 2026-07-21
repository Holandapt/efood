import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 48px;
  position: relative;
  background-color: ${Cores.CorPrimary};
`
export const Container = styled.div`
  padding: 8px;

  ${TagContainer} {
    margin-right: 8px;
  }
  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  ${ButtonContainer} {
    margin-top: auto;
    display: inline-block;
    text-align: center;
    background-color: ${Cores.CorSecondary};
    color: ${Cores.CorPrimary};
    width: 100%;
    padding: 4px;
    border: none;
    cursor: pointer;
  }
`

export const Titulo = styled.h3`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${Cores.CorSecondary};
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${Cores.CorSecondary};
  margin-bottom: 16px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
`
