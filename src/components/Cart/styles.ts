import styled from 'styled-components'
import reciclagem from '../../assets/images/lixeira-de-reciclagem.png'
import { breakpoints, Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CartContaine = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
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
  background-color: ${Colors.primaryColor};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  @media (max-width: ${breakpoints.tablet}) {
    width: 50%;
    padding: 90px 8px 0 8px;
  }

  ${ButtonContainer} {
    width: 100%;
    background-color: ${Colors.secondaryColor};
    color: ${Colors.primaryColor};
    border: none;
    cursor: pointer;
  }
`
export const CartItem = styled.div`
  display: flex;
  background-color: ${Colors.secondaryColor};
  position: relative;
  height: 100px;
  width: 344px;
  padding: 8px 8px 0px;
  color: ${Colors.primaryColor};
  margin-bottom: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 90%;
    display: block;
    height: auto;
  }

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
      margin-bottom: 8px;
    }
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
  align-items: center;
  margin-bottom: 16px;
  color: ${Colors.secondaryColor};
  font-size: 14px;
  font-weight: bold;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 80px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    align-items: center;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }
`
export const CartBox = styled.div`
  height: 390px;
  overflow-y: scroll;
  scrollbar-width: none;
`
