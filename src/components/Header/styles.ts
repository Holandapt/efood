import styled from 'styled-components'
import { Logo } from '../Hero/styles'
import { ButtonLink } from '../Button/styles'
import { Cores } from '../../styles'

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
    color: ${Cores.CorPrimary};
    font-size: 18px;
    font-weight: 900;
  }
`

export const Carrinho = styled.a``
