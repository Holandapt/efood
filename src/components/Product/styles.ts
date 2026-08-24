import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
import { Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 48px;
  position: relative;
  background-color: ${Colors.primaryColor};
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
    background-color: ${Colors.secondaryColor};
    color: ${Colors.primaryColor};
    width: 100%;
    padding: 4px;
    border: none;
    cursor: pointer;
  }
`

export const Title = styled.h3`
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.secondaryColor};
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.secondaryColor};
  margin-bottom: 16px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
`
