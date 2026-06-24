import styled from 'styled-components'
import { Props } from '.'
import { Cores } from '../../styles'

export const TagContainer = styled.div<Props>`
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '6px 4px' : '4px 6px')};
  display: inline-block;
  background-color: ${Cores.CorPrimary};
  color: ${Cores.CorSecondary};
`
