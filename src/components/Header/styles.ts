import styled from 'styled-components'
import { Logo } from '../Hero/styles'
import { ButtonLink } from '../Button/styles'
import { breakpoints, Colors } from '../../styles'
import imgFundo from '../../assets/images/fundo.png'

export const Menu = styled.div`
  ${Logo} {
    margin: 0;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 40px 0px;
  }

  ${ButtonLink} {
    background-color: transparent;
    color: ${Colors.primaryColor};
    font-size: 18px;
    font-weight: 900;
  }

  @media (max-width: ${breakpoints.desktop}) {
    .container {
      position: fixed;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      max-width: 100%;
      background-image: url(${imgFundo});
      padding: 20px 0px;

      justify-content: space-between;
      ${Logo} {
        display: none;
      }
    }
  }
`

export const Carrinho = styled.a``
