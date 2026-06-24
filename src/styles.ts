import { createGlobalStyle } from 'styled-components'

export const Cores = {
  CorPrimary: '#E66767',
  CorSecondary: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    font-family: Roboto, sans-serif;
    list-style: none
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
