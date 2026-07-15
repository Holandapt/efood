import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  padding: 80px 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
