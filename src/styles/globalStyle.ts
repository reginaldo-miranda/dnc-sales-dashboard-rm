/*import { createGlobalStyle } from 'styled-components'
import { Theme } from '../types/theme'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
   body, html {
     background: ${(props) => props.theme.appBackground};
     margin: 0;
     padding: 0;
     font-family: "Inter", sans-serif;
   }
   
   h1, h2, p, ul, li {
     margin: 0;
     padding: 0;
   }

`
//---------------------------

import { createGlobalStyle } from 'styled-components'
import { Theme } from '../types/theme'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    background: ${({ theme }) => theme.appBackground};
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
   
  }

  h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
  }
`
*/

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    background: ${({ theme }) => theme.appBackground};
    margin: 0;
    padding: 0;
    font-family: "Inter", sans-serif;
    
  }

  h1, h2, p, ul, li {
    margin: 0;
    padding: 0;
  }
`
