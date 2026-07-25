import styled from 'styled-components'
import reciclagem from '../../assets/images/lixeira-de-reciclagem.png'
import { Cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CartContaine = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  background-color: ${Cores.CorPrimary};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    width: 100%;
    background-color: ${Cores.CorSecondary};
    color: ${Cores.CorPrimary};
    border: none;
  }
`
export const CartItem = styled.div`
  display: flex;
  background-color: ${Cores.CorSecondary};
  padding: 8px 0;
  position: relative;
  height: 100px;
  width: 344px;
  padding: 8px 8px 0px;
  color: ${Cores.CorPrimary};
  margin-bottom: 16px;
  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    align-items: center;
  }

  p {
    margin-top: 16px;
    font-size: 14px;
    line-height: 22px;
  }

  button {
    background-image: url(${reciclagem});
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 8px;
    margin-bottom: 8px;
    background-color: transparent;
    cursor: pointer;
  }
`

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
  color: ${Cores.CorSecondary};
  font-size: 14px;
  font-weight: bold;
`

export const Total = styled.div``
