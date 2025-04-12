//364

import { StrictMode } from 'react'
import { ThemeProvider } from 'styled-components'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import { GlobalStyle, lightTheme } from './styles/'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>
)

/*

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from './App.tsx'
import { GlobalStyle, lightTheme } from './styles'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StrictMode>
  )
}
*/
