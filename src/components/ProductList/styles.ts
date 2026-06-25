import styled from 'styled-components'

export const Container = styled.div``

export const List = styled.ul`
  display: grid;
  padding: 80px 0;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 80px;

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`
