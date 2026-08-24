import styled from 'styled-components'
import { breakpoints, Colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const CartContainer = styled.div`
  color: ${Colors.secondaryColor};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;

  /* &.is-open {
    display: flex;
  } */
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
  font-size: 14px;
  line-height: 22px;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  .marginTop {
    margin-top: 22px;
  }

  /* @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    padding: 90px 8px 0 8px;
  } */

  /* ${ButtonContainer} {
    width: 100%;
    background-color: ${Colors.secondaryColor};
    color: ${Colors.primaryColor};
    border: none;
    cursor: pointer;
  } */
`
